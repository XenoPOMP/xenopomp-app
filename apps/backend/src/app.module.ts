import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './features';
import { ProjectsModule } from './routes/projects';
import { AuthModule } from './routes/auth/auth.module';

@Module({
  imports: [ProjectsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
