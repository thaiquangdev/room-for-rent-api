import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import slugify from 'slugify';
import { CreatePostDto } from 'src/modules/posts/dto/create-post.dto';
import { PostImage } from 'src/modules/posts/post-image.entity';
import { Post } from 'src/modules/posts/post.entity';
import { DataSource, In, Repository } from 'typeorm';
import * as fs from 'fs';
import { User } from 'src/modules/users/user.entity';
import { Highlight } from 'src/modules/highlights/highlight.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(PostImage)
    private readonly postImageRepository: Repository<PostImage>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Highlight)
    private readonly highlightRepository: Repository<Highlight>,
    private dataSource: DataSource,
  ) {}

  async createPost(
    userId: string,
    createPostDto: CreatePostDto,
    images: string[],
    video: string,
  ) {
    const postSlug = slugify(createPostDto.postName, { lower: true });
    const postExist = await this.postRepository.findOne({
      where: { postSlug },
    });

    if (postExist) {
      // xóa ảnh
      for (const imagePath of images) {
        try {
          fs.unlinkSync(imagePath);
        } catch (err) {
          console.error(`Không thể xóa ảnh: ${imagePath}`, err);
        }
      }

      // Xóa video
      if (video) {
        try {
          fs.unlinkSync(video);
        } catch (err) {
          console.error(`Không thể xóa video: ${video}`, err);
        }
      }

      throw new BadRequestException('Bài viết đã tồn tại!');
    }

    const user = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new NotFoundException('Người dùng không tồn tại');
    }

    const highlights = await this.highlightRepository.findBy({
      id: In(createPostDto.highlights),
    });

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      console.log('Bắt đầu tạo mới Post');

      const newPost = queryRunner.manager.create(Post, {
        postName: createPostDto.postName,
        postSlug,
        category: createPostDto.category,
        conscious: createPostDto.conscious,
        district: createPostDto.district,
        ward: createPostDto.ward,
        road: createPostDto.road,
        hourseNumber: createPostDto.hourseNumber,
        description: createPostDto.description,
        price: Number(createPostDto.price),
        priceUnit: createPostDto.priceUnit,
        area: Number(createPostDto.area),
        videoType: createPostDto.videoType,
        videoUrl: video,
        highlights: highlights,
        user: user,
      });

      console.log('Đã tạo đối tượng Post:', newPost);

      const savedPost = await queryRunner.manager.save(newPost);
      console.log('Đã lưu Post vào DB:', savedPost);

      const postImages = images.map((img) =>
        queryRunner.manager.create(PostImage, {
          imageUrl: img,
          post: savedPost,
        }),
      );
      console.log('Chuẩn bị lưu các ảnh:', postImages);

      await queryRunner.manager.save(PostImage, postImages);
      console.log('Đã lưu ảnh vào DB');

      await queryRunner.commitTransaction();
      console.log('Đã commit transaction');

      return {
        message: 'Thêm mới bài đăng thành công',
      };
    } catch (error) {
      console.error('Lỗi khi tạo Post:', error);
      await queryRunner.rollbackTransaction();

      // Xoá ảnh + video đã upload nếu lỗi DB
      for (const image of images) {
        try {
          fs.unlinkSync(image);
          console.log(`Đã xóa ảnh sau lỗi: ${image}`);
        } catch (err) {
          console.error(`Không thể xoá ảnh ${image}`, err);
        }
      }

      if (video) {
        try {
          fs.unlinkSync(video);
          console.log(`Đã xóa video sau lỗi: ${video}`);
        } catch (err) {
          console.error(`Không thể xoá video ${video}`, err);
        }
      }

      throw new InternalServerErrorException('Tạo bài viết thất bại');
    } finally {
      await queryRunner.release();
      console.log('Đã release queryRunner');
    }
  }
}
