import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateServicePriceDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Tên gói tin đăng không được để trống' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Giá ngày không được để trống' })
  priceDay: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Giá tuần không được để trống' })
  priceWeek: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Giá tháng không được để trống' })
  priceMonth: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Giá đẩy tin không được để trống' })
  pricePushPost: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Màu sắc tiêu đề không được để trống' })
  titleColor: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Kích thước tin không được để trống' })
  postSize: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Tự động duyệt không được để trống' })
  autoBrowse: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'Hiển thị nút gọi điện không được để trống' })
  showButtonCall: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'Độ ưu tiên không được để trống' })
  priority: number;
}
