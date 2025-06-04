import { IsOptional, IsNumberString } from 'class-validator';

export class HighlightPaginationDto {
  @IsOptional()
  @IsNumberString()
  page?: string;

  @IsOptional()
  @IsNumberString()
  limit?: string;
}
