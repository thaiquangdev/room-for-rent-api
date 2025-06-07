import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { RequestUser } from 'src/common/types/request-user';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { SavePostDto } from 'src/modules/save-posts/dto/save-post.dto';
import { SavePostsService } from 'src/modules/save-posts/save-posts.service';

@Controller('save-posts')
export class SavePostsController {
  constructor(private readonly savePostsService: SavePostsService) {}

  @UseGuards(AuthGuard)
  @Post('/')
  async savePost(@Body() savePostDto: SavePostDto, @Req() req: Request) {
    const { id } = req['user'] as RequestUser;

    return await this.savePostsService.savePost(savePostDto, id);
  }

  @UseGuards(AuthGuard)
  @Get('/')
  async getSavePosts(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    return await this.savePostsService.getAllSavePost({ page, limit });
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteSavePost(@Param('id') id: string) {
    return await this.savePostsService.deleteSavePost(id);
  }
}
