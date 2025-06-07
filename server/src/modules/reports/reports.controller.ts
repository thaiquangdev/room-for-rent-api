import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CreateReportDto } from 'src/modules/reports/dto/create-report.dto';
import { ReportsService } from 'src/modules/reports/reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post('/create-report')
  async createReport(@Body() createReportDto: CreateReportDto) {
    return await this.reportsService.createReport(createReportDto);
  }

  @UseGuards(AuthGuard)
  @Get('/')
  async getReports(@Query('page') page: string, @Query('limit') limit: string) {
    return await this.reportsService.getReports({ page, limit });
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getReportDetail(@Param('id') id: string) {
    return await this.reportsService.getReportDetail(id);
  }

  @UseGuards(AuthGuard)
  @Patch('/:id/resolve')
  async resolveReport(@Param('id') id: string, @Body('status') status: string) {
    return await this.reportsService.resolveReport(id, status);
  }
}
