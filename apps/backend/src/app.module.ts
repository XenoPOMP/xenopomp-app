import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './features';
import { AuthModule } from './routes/auth';
import { ProjectsModule } from './routes/projects';
import { UserModule } from './routes/user';

@Module({
  imports: [ConfigModule.forRoot(), ProjectsModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
