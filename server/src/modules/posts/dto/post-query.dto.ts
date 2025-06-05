import { IsIn, IsOptional, IsString } from 'class-validator';

// post-query.dto.ts
export class PostQueryDto {
  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  limit?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  ward?: string;

  @IsOptional()
  @IsString()
  price?: string; // "1000000-5000000"

  @IsOptional()
  @IsString()
  area?: string; // "20-50"
}
