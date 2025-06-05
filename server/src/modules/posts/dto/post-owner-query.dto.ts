import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class PostOwnerQueryDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  page: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  limit: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  search: string;
}
