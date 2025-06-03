/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
  MaxLength,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Họ và tên không được để trống' })
  @IsString()
  @MinLength(10, { message: 'Họ và tên tối thiểu 10 ký tự' })
  @MaxLength(100, { message: 'Họ và tên tối đa 100 ký tự' })
  fullName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Mail không được để trống' })
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @IsString()
  @MinLength(6, { message: 'Mật khẩu tối thiểu 6 ký tự' })
  @MaxLength(50, { message: 'Mật khẩu tối đa 50 ký tự' })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Số điện thoại không được để trống' })
  @IsString()
  @Length(10, 10, { message: 'Số điện thoại phải đúng 10 ký tự' })
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Vai trò không được để trống' })
  @IsString()
  role: string;
}
