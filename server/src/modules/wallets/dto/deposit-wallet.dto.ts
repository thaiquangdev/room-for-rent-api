import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DepositWalletDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty({ message: 'Số tiền nạp không được để trống' })
  amount: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Phương thức thanh toán không được để trống' })
  paymentMethod: string;
}
