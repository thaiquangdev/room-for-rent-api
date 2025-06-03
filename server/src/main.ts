import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {ResponseInterceptor} from "./common/interceptors/response.interceptor";
import {LoggingInterceptor} from "./common/interceptors/logging.interceptor";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Sử dụng interceptor cho toàn bộ ứng dụng
  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.useGlobalInterceptors(new ResponseInterceptor());

  app.useGlobalInterceptors(new LoggingInterceptor());

  // cấu hình swagger
  const config = new DocumentBuilder()
      .setTitle('Cho thuê phòng trọ API')
      .setDescription('Danh sách API cho thuê phòng trọ')
      .setVersion('1.0')
      .addTag('auth')
      .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
