import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/modules/posts/post.entity';
import { PostImage } from 'src/modules/posts/post-image.entity';
import { User } from 'src/modules/users/user.entity';
import { Highlight } from 'src/modules/highlights/highlight.entity';
import { JwtModule } from '@nestjs/jwt';
import { Payment } from 'src/modules/payments/payment.entity';
import { Wallet } from 'src/modules/wallets/wallet.entity';
import { ServicePrice } from 'src/modules/service-prices/service-price.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Post,
      PostImage,
      User,
      Highlight,
      Payment,
      Wallet,
      ServicePrice,
    ]),
    JwtModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
