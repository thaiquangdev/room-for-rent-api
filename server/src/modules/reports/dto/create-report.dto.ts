import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateReportDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Họ và tên của bạn không được để trống' })
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Số điện thoại của bạn không được để trống' })
  phoneNumber: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty({ message: 'Email của bạn không được để trống' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Lý do phản ánh không được để trống' })
  reason: string;

  @ApiProperty()
  @IsString()
  moreDescription: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Mã bài đăng không được để trống' })
  postId: string;
}
