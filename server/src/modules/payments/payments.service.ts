import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/modules/payments/payment.entity';
import { User } from 'src/modules/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getDeposits(
    userId: string,
    query: { page: string; limit: string },
  ): Promise<{
    data: Payment;
    total: Payment;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new BadRequestException('Không tìm thấy người dùng');
    }

    const [data, total] = await this.paymentRepository.find({
      where: { user, paymentType: 'Nạp tiền' },
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(Number(total) / limit),
    };
  }

  async getPayments(
    userId: string,
    query: { page: string; limit: string },
  ): Promise<{
    data: Payment;
    total: Payment;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new BadRequestException('Không tìm thấy người dùng');
    }

    const [data, total] = await this.paymentRepository.find({
      where: { user, paymentType: 'Thanh toán' },
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(Number(total) / limit),
    };
  }
}
