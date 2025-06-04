/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PriceUnit } from 'src/common/enums/price-unit.enum';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Tên bài đăng không được để trống' })
  @MinLength(30, { message: 'Tên bài đăng tối thiểu 30 ký tự' })
  @MaxLength(100, { message: 'Tên bài đăng tối đa 100 ký tự' })
  postName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Chuyên mục bài đăng không được để trống' })
  category: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Tỉnh/Thành phố không được để trống' })
  conscious: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Quận/Huyện không được để trống' })
  district: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Phường/Xã không được để trống' })
  ward: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Đường/Phố không được để trống' })
  road: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Số nhà không được để trống' })
  hourseNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  @MinLength(50, { message: 'Mô tả tối thiểu 50 ký tự' })
  @MaxLength(5000, { message: 'Mô tả tối đa 5000 ký tự' })
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Giá cho thuê không được để trống' })
  price: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Đơn vị giá không được để trống' })
  priceUnit: PriceUnit;

  @ApiProperty()
  @IsNotEmpty({ message: 'Diện tích không được để trống' })
  area: string;

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty({ message: 'Đặc điểm nổi bật không được để trống' })
  highlights: string[];

  @ApiProperty()
  videoType: string;

  @ApiProperty()
  videoUrl: string;
}
