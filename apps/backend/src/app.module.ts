import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './features';
import { AuthModule } from './routes/auth/auth.module';
import { ProjectsModule } from './routes/projects';

@Module({
  imports: [ProjectsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
