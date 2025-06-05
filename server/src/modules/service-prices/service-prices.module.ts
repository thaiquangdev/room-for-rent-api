import { Module } from '@nestjs/common';
import { ServicePricesController } from './service-prices.controller';
import { ServicePricesService } from './service-prices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicePrice } from 'src/modules/service-prices/service-price.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([ServicePrice]), JwtModule],
  controllers: [ServicePricesController],
  providers: [ServicePricesService],
})
export class ServicePricesModule {}
