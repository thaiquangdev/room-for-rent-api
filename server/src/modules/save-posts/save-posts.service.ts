import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { SavePostDto } from 'src/modules/save-posts/dto/save-post.dto';
import { SavePost } from 'src/modules/save-posts/save-post.entity';
import { User } from 'src/modules/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SavePostsService {
  constructor(
    @InjectRepository(SavePost)
    private readonly savePostRepository: Repository<SavePost>,
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async savePost(savePostDto: SavePostDto, userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new BadRequestException('Không tìm thấy người dùng');
    }

    const post = await this.postRepository.findOne({
      where: {
        id: savePostDto.postId,
      },
    });

    if (!post) {
      throw new BadRequestException('Không tìm thấy bài đăng');
    }

    const savePostExist = await this.savePostRepository.findOne({
      where: {
        post,
        user,
      },
    });

    if (savePostExist) {
      throw new BadRequestException('Bài đăng này đã được lưu');
    }

    const newSavePost = this.savePostRepository.create({
      user,
      post,
    });

    await this.savePostRepository.save(newSavePost);

    return {
      message: 'Lưu bài đăng vào danh sách yêu thích thành công',
    };
  }

  async getAllSavePost(query: { page: string; limit: string }) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const [data, total] = await this.savePostRepository.findAndCount({
      skip,
      take: limit,
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async deleteSavePost(savePostId: string) {
    const savePost = await this.savePostRepository.findOne({
      where: { id: savePostId },
    });

    if (!savePost) {
      throw new BadRequestException(
        'Không tìm thấy bài đăng trong danh sách yêu thích',
      );
    }

    await this.savePostRepository.delete(savePost);

    return {
      message: 'Xóa bài đăng trong danh sách yêu thích thành công',
    };
  }
}
