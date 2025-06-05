import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/modules/payments/payment.entity';
import { DepositWalletDto } from 'src/modules/wallets/dto/deposit-wallet.dto';
import { Wallet } from 'src/modules/wallets/wallet.entity';
import { DataSource, Repository } from 'typeorm';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';
import moment from 'moment';
import { zaloConfig } from 'src/common/configs/zalo.config';
import { User } from 'src/modules/users/user.entity';
import { ResponseZalopay } from 'src/common/types/response-zalopay';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async depositWalletZalopay(
    depositWalletDto: DepositWalletDto,
    userId: string,
  ) {
    const embed_data = {
      redirectUrl: 'https://facebook.com',
    };

    const items = [{}];
    const transID = Math.floor(Math.random() * 1000000);
    const order = {
      app_id: zaloConfig.app_id,
      app_trans_id: `${moment().format('YYMMDD')}_${transID}`,
      app_user: userId,
      app_time: Date.now(), // milliseconds
      item: JSON.stringify(items),
      embed_data: JSON.stringify(embed_data),
      amount: depositWalletDto.amount,
      description: `Nạp tiền vào tài khoản #${transID}`,
      bank_code: '',
      mac: '',
    };

    const data =
      zaloConfig.app_id +
      '|' +
      order.app_trans_id +
      '|' +
      order.app_user +
      '|' +
      order.amount +
      '|' +
      order.app_time +
      '|' +
      order.embed_data +
      '|' +
      order.item;

    order.mac = CryptoJS.HmacSHA256(data, zaloConfig.key1).toString();

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await axios.post(zaloConfig.endpoint, null, {
        params: order,
      });

      const response = result.data as ResponseZalopay;

      if (response.return_code === 1) {
        const user = await queryRunner.manager.findOne(User, {
          where: { id: userId },
        });

        if (!user) {
          throw new BadRequestException('Không tìm thấy người dùng');
        }

        const newPayment = this.paymentRepository.create({
          paymentStatus: 'Đang chờ',
          paymentDate: Date.now(),
          amount: depositWalletDto.amount,
          transactionId: transID.toString(),
          paymentMethod: depositWalletDto.paymentMethod,
          user,
          paymentType: 'Nạp tiền',
        });

        await queryRunner.manager.save(newPayment);
        await queryRunner.commitTransaction();

        return {
          order_url: response.order_url,
        };
      } else {
        throw new InternalServerErrorException(response.sub_return_message);
      }
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error('Deposit ZaloPay error:', error);
      throw new InternalServerErrorException('Lỗi nạp tiền');
    } finally {
      await queryRunner.release();
    }
  }

  async callBackZalopay(body: { dataStr: string; reqMac: string }) {
    const result: { return_code: number; return_message: string } = {
      return_code: 0,
      return_message: '',
    };

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { dataStr, reqMac } = body;
      const mac = CryptoJS.HmacSHA256(dataStr, zaloConfig.key2).toString();

      if (reqMac !== mac) {
        console.log('Mac không hợp lệ');
        result.return_code = -1;
        result.return_message = 'MAC không hợp lệ';
        await queryRunner.rollbackTransaction();
        return result;
      }

      const dataJson = JSON.parse(dataStr) as { app_trans_id: string };
      const transactionId = dataJson.app_trans_id;

      const payment = await queryRunner.manager.findOne(
        this.paymentRepository.target,
        {
          where: { transactionId },
          relations: ['user'],
        },
      );

      if (!payment) {
        result.return_code = 0;
        result.return_message = 'Không tìm thấy đơn hàng';
        await queryRunner.rollbackTransaction();
        return result;
      }

      // Kiểm tra trạng thái payment để tránh xử lý trùng lặp
      if (payment.paymentStatus === 'Thành công') {
        result.return_code = 1;
        result.return_message = 'Đơn hàng đã được xử lý';
        await queryRunner.rollbackTransaction();
        return result;
      }

      // Cập nhật trạng thái thanh toán
      payment.paymentStatus = 'Thành công';
      await queryRunner.manager.save(payment);

      // Kiểm tra wallet
      const wallet = await queryRunner.manager.findOne(
        this.walletRepository.target,
        {
          where: { user: payment.user },
          relations: ['user'],
        },
      );

      if (!wallet) {
        const newWallet = this.walletRepository.create({
          user: payment.user,
          balance: payment.amount,
        });
        await queryRunner.manager.save(newWallet);
      } else {
        wallet.balance += Number(payment.amount);
        await queryRunner.manager.save(wallet);
      }

      await queryRunner.commitTransaction();

      result.return_code = 1;
      result.return_message = 'Thành công';

      return {
        message: 'Nạp tiền thành công',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error('Lỗi callback Zalopay:', error);

      result.return_code = 0;
      result.return_message = 'Lỗi xử lý callback';
      return result;
    } finally {
      await queryRunner.release();
    }
  }
}
