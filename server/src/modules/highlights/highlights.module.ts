import { Module } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { HighlightsController } from './highlights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Highlight } from 'src/modules/highlights/highlight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Highlight])],
  providers: [HighlightsService],
  controllers: [HighlightsController],
})
export class HighlightsModule {}
