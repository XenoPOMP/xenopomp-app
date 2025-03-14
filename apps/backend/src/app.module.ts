import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataService } from './features/data.service';
import { PrismaService } from './features/prisma.service';
import { ProjectsModule } from './routes/projects/projects.module';

@Module({
  imports: [ProjectsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, DataService],
})
export class AppModule {}
