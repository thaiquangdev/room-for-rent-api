/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateHighlightDto {
  @ApiProperty()
  @IsString()
  name: string;
}
