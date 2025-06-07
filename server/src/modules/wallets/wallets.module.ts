import { Module } from '@nestjs/common';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from 'src/modules/wallets/wallet.entity';
import { Payment } from 'src/modules/payments/payment.entity';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/modules/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet, Payment, User]), JwtModule],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
