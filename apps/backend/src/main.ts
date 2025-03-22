import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';

import { PORTS } from '@repo/constants';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: [process.env.FRONT_END_HOST],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(PORTS.BACKEND);
}
bootstrap();
