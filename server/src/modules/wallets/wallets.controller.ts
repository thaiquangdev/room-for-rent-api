import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { RequestUser } from 'src/common/types/request-user';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { DepositWalletDto } from 'src/modules/wallets/dto/deposit-wallet.dto';
import { WalletsService } from 'src/modules/wallets/wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletService: WalletsService) {}

  @UseGuards(AuthGuard)
  @Post('/deposit-zalopay')
  async depositWalletZalopay(
    @Body() depositWalletDto: DepositWalletDto,
    @Req() req: Request,
  ): Promise<
    | {
        order_url: string;
      }
    | undefined
  > {
    const { id } = req['user'] as RequestUser;

    return await this.walletService.depositWalletZalopay(depositWalletDto, id);
  }

  @Post('/callback-zalopay')
  async callBackZalopay(
    @Body() body: { dataStr: string; reqMac: string },
  ): Promise<
    { return_code: number; return_message: string } | { message: string }
  > {
    return await this.walletService.callBackZalopay(body);
  }
}
