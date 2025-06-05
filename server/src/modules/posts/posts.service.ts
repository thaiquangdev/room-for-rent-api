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
import {
  Between,
  DataSource,
  FindManyOptions,
  FindOptionsWhere,
  In,
  Repository,
} from 'typeorm';
import * as fs from 'fs';
import { User } from 'src/modules/users/user.entity';
import { Highlight } from 'src/modules/highlights/highlight.entity';
import { PaymentPostDto } from 'src/modules/posts/dto/payment-post.dto';
import { Payment } from 'src/modules/payments/payment.entity';
import { Wallet } from 'src/modules/wallets/wallet.entity';
import { ServicePrice } from 'src/modules/service-prices/service-price.entity';
import { PostQueryDto } from 'src/modules/posts/dto/post-query.dto';
import { PostOwnerQueryDto } from 'src/modules/posts/dto/post-owner-query.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    @InjectRepository(PostImage)
    private readonly postImageRepository: Repository<PostImage>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Highlight)
    private readonly highlightRepository: Repository<Highlight>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
    @InjectRepository(ServicePrice)
    private readonly servicePriceRepository: Repository<ServicePrice>,
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

  async paymentPost(paymentPostDto: PaymentPostDto, userId: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const post = await queryRunner.manager.findOne(Post, {
        where: { id: paymentPostDto.postId },
      });

      if (!post) {
        throw new BadRequestException('Không tìm thấy bài đăng');
      }

      const user = await queryRunner.manager.findOne(User, {
        where: { id: userId },
      });
      if (!user) {
        throw new BadRequestException('Không tìm thấy người dùng');
      }

      const wallet = await queryRunner.manager.findOne(Wallet, {
        where: { user: { id: userId } },
      });

      if (!wallet) {
        throw new BadRequestException('Không tìm thấy ví người dùng');
      }

      if (wallet.balance < Number(paymentPostDto.amount)) {
        throw new BadRequestException(
          'Số tiền trong ví không đủ để thanh toán',
        );
      }

      const afterAmount = wallet.balance - Number(paymentPostDto.amount);

      const servicePrice = await queryRunner.manager.findOne(ServicePrice, {
        where: { id: paymentPostDto.servicePriceId },
      });

      if (!servicePrice) {
        throw new BadRequestException('Gói bài đăng không tồn tại');
      }

      const payment = this.paymentRepository.create({
        user,
        paymentStatus: 'Thành công',
        amount: paymentPostDto.amount,
        paymentType: 'Thanh toán',
        beforeAmount: wallet.balance,
        afterAmount,
        post,
        servicePrice,
      });

      // Cập nhật ví
      wallet.balance = afterAmount;

      // Cập nhật trạng thái bài đăng
      post.expiredAt = paymentPostDto.expiredAt;
      post.servicePrice = servicePrice;
      post.isApprove = servicePrice.priority >= 2 && servicePrice.priority <= 5;

      await queryRunner.manager.save(wallet);
      await queryRunner.manager.save(payment);
      await queryRunner.manager.save(post);

      await queryRunner.commitTransaction();

      return {
        message: 'Thanh toán bài đăng thành công',
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error(error);
      throw new InternalServerErrorException(
        'Đã xảy ra lỗi khi thanh toán bài đăng',
      );
    } finally {
      await queryRunner.release();
    }
  }

  async approvePost(isApprove: boolean, postId: string) {
    const post = await this.postRepository.findOne({
      where: { id: postId },
    });

    if (!post) {
      throw new BadRequestException('Bài đăng không tồn tại');
    }

    post.isApprove = isApprove;

    await this.postRepository.save(post);

    return {
      message: `Bài đăng đã được ${isApprove ? 'duyệt' : 'từ chối'} thành công`,
    };
  }

  async getAllPostForUser(postQueryDto: PostQueryDto) {
    const page = Math.max(1, Number(postQueryDto.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(postQueryDto.limit) || 10));
    const skip = (page - 1) * limit;

    // Build where condition dynamically và type-safe
    const whereQuery: FindOptionsWhere<Post> = {};

    // String filters - chỉ add khi có giá trị
    const stringFilters = [
      'category',
      'conscious',
      'district',
      'ward',
      'highlight',
    ] as const;
    stringFilters.forEach((field) => {
      const value = postQueryDto[field];
      if (value && value.trim()) {
        whereQuery[field] = value.trim();
      }
    });

    // Range filters với validation
    if (postQueryDto.price) {
      const priceRange = this.parseRange(postQueryDto.price);
      if (priceRange) {
        whereQuery.price = Between(priceRange.min, priceRange.max);
      }
    }

    if (postQueryDto.area) {
      const areaRange = this.parseRange(postQueryDto.area);
      if (areaRange) {
        whereQuery.area = Between(areaRange.min, areaRange.max);
      }
    }

    // Query với relations nếu cần
    const queryOptions: FindManyOptions<Post> = {
      where: whereQuery,
      skip,
      take: limit,
      order: {
        servicePrice: {
          priority: 'DESC',
        },
      },
    };

    const [posts, total] = await this.postRepository.findAndCount(queryOptions);

    return {
      data: posts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    };
  }

  async getAllPostForOwner(postOwnerQueryDto: PostOwnerQueryDto) {
    const page = Number(postOwnerQueryDto.page) || 1;
    const limit = Number(postOwnerQueryDto.limit) || 10;
    const skip = (page - 1) * limit;

    const whereQuery: any = {};

    if (postOwnerQueryDto.search?.trim()) {
      whereQuery.postName = Like(`%${postOwnerQueryDto.search.trim()}%`);
    }

    const [data, total] = await this.postRepository.findAndCount({
      where: whereQuery,
      skip,
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      hasNext: page * limit < total,
      hasPrev: page > 1,
    };
  }

  private parseRange(rangeStr: string): { min: number; max: number } | null {
    try {
      const parts = rangeStr.split('-');
      if (parts.length !== 2) return null;

      const min = Number(parts[0]);
      const max = Number(parts[1]);

      if (isNaN(min) || isNaN(max) || min < 0 || max < min) {
        return null;
      }

      return { min, max };
    } catch {
      return null;
    }
  }
}
