import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/modules/posts/dto/create-post.dto';
import { PostImage } from 'src/modules/posts/post-image.entity';
import { Post } from 'src/modules/posts/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(PostImage)
    private readonly postImageRepository: Repository<PostImage>,
  ) {}

  async createPost(createPostDto: CreatePostDto, images: string[]) {}
}
