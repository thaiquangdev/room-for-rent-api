import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CreateHighlightDto } from 'src/modules/highlights/dto/create-highlight.dto';
import { HighlightPaginationDto } from 'src/modules/highlights/dto/highlight-pagination.dto';
import { UpdateHighlightDto } from 'src/modules/highlights/dto/update-highlight.dto';
import { HighlightsService } from 'src/modules/highlights/highlights.service';

@ApiTags('highlights')
@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @UseGuards(AuthGuard)
  @Post('/create-highlight')
  async createHighlight(@Body() createHighligtDto: CreateHighlightDto) {
    return await this.highlightsService.createHighligh(createHighligtDto);
  }

  @Get('/')
  async getHighlights(@Query() query: HighlightPaginationDto) {
    return await this.highlightsService.getHighlights(query);
  }

  @UseGuards(AuthGuard)
  @Put('/update-hightlight/:hid')
  async updateHighlight(
    @Body() updateHighlightDto: UpdateHighlightDto,
    @Param('id') id: string,
  ) {
    return await this.highlightsService.updateHighlight(updateHighlightDto, id);
  }
}
