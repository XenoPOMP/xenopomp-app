import { NestFactory } from '@nestjs/core';

import { PORTS } from '@repo/constants';

import { AppModule } from '~/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORTS.BACKEND);
}
bootstrap();
