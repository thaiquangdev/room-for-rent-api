import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { PostImage } from 'src/modules/posts/post-image.entity';
import { User } from 'src/modules/users/user.entity';
import { Highlight } from 'src/modules/highlights/highlight.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostImage, User, Highlight]),
    JwtModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
