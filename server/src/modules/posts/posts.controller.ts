import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { extname } from 'path';
import { storageConfig } from 'src/common/configs/multer.config';
import { RequestUser } from 'src/common/types/request-user';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CreatePostDto } from 'src/modules/posts/dto/create-post.dto';
import { PostsService } from 'src/modules/posts/posts.service';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @UseGuards(AuthGuard)
  @Post('create-post')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'images', maxCount: 20 },
        { name: 'video', maxCount: 1 },
      ],
      {
        storage: storageConfig('images-post'),
        fileFilter: (req, file, cb) => {
          const ext = extname(file.originalname).toLowerCase();
          const allowedImageExt = ['.jpg', '.jpeg', '.png', '.webp'];
          const allowedVideoExt = ['.mp4', '.avi', '.mov'];

          if (file.fieldname === 'images' && allowedImageExt.includes(ext)) {
            cb(null, true);
          } else if (
            file.fieldname === 'video' &&
            allowedVideoExt.includes(ext)
          ) {
            cb(null, true);
          } else {
            cb(null, false);
          }
        },
      },
    ),
  )
  async createPost(
    @UploadedFiles()
    files: {
      images?: Express.Multer.File[];
      video?: Express.Multer.File[];
    },
    @Body() createPostDto: CreatePostDto,
    @Req() req: Request,
  ) {
    const { id } = req['user'] as RequestUser;

    const imageFiles = files.images || [];
    const videoFile = files.video?.[0];

    let video: string | null = null;
    if (createPostDto.videoType === 'link') {
      video = createPostDto.videoUrl;
    } else if (videoFile) {
      video = `${videoFile.destination}/${videoFile.filename}`;
    }

    const imagePaths = imageFiles.map((file) => file.path);

    return await this.postService.createPost(
      id,
      createPostDto,
      imagePaths,
      video ?? '',
    );
  }
}
