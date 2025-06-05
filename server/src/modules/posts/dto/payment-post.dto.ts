import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaymentPostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Mã bài đăng không được để trống' })
  postId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Mã gói bài đăng không được để trống' })
  servicePriceId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Ngày hết hạn không được để trống' })
  expiredAt: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'Giá tiền không được để trống' })
  amount: number;
}
