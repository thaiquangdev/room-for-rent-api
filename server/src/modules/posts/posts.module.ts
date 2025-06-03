import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { PostImage } from 'src/modules/posts/post-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostImage])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
