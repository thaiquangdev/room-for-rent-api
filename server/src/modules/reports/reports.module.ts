import { Module, Post } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from 'src/modules/reports/report.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Report, Post]), JwtModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
