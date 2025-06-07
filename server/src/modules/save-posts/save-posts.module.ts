import { Module } from '@nestjs/common';
import { SavePostsController } from './save-posts.controller';
import { SavePostsService } from './save-posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SavePost } from 'src/modules/save-posts/save-post.entity';
import { Post } from 'src/modules/posts/post.entity';
import { User } from 'src/modules/users/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([SavePost, Post, User]), JwtModule],
  controllers: [SavePostsController],
  providers: [SavePostsService],
})
export class SavePostsModule {}
