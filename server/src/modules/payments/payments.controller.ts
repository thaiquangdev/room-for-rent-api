import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { RequestUser } from 'src/common/types/request-user';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { Payment } from 'src/modules/payments/payment.entity';
import { PaymentsService } from 'src/modules/payments/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @UseGuards(AuthGuard)
  @Get('/get-deposits')
  async getDeposits(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Req() req: Request,
  ): Promise<{
    data: Payment;
    total: Payment;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const { id } = req['user'] as RequestUser;

    return await this.paymentService.getDeposits(id, { page, limit });
  }

  @UseGuards(AuthGuard)
  @Get('/get-payments')
  async getPayments(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Req() req: Request,
  ): Promise<{
    data: Payment;
    total: Payment;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const { id } = req['user'] as RequestUser;

    return await this.paymentService.getPayments(id, { page, limit });
  }
}
