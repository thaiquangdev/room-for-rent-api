import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/data-source';
import { MailModule } from 'src/modules/mail/mail.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';
import { HighlightsModule } from './modules/highlights/highlights.module';
import { PostsModule } from 'src/modules/posts/posts.module';
import { ServicePricesModule } from './modules/service-prices/service-prices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    MailModule,
    AuthModule,
    UsersModule,
    HighlightsModule,
    PostsModule,
    ServicePricesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
