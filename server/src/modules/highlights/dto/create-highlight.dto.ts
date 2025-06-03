/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHighlightDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Đặc điểm nổi bật không được để trống' })
  name: string;
}
