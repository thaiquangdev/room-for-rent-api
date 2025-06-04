import { ApiProperty } from '@nestjs/swagger';

export class UpadteServicePriceDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  priceDay: number;

  @ApiProperty()
  priceWeek: number;

  @ApiProperty()
  priceMonth: number;

  @ApiProperty()
  pricePushPost: number;

  @ApiProperty()
  titleColor: string;

  @ApiProperty()
  postSize: string;

  @ApiProperty()
  autoBrowse: boolean;

  @ApiProperty()
  showButtonCall: boolean;

  @ApiProperty()
  priority: number;
}
