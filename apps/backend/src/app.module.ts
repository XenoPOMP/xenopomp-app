import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './features/prisma.service';
import { ProjectsModule } from './projects/projects.module';
import { DataService } from './features/data.service';

@Module({
  imports: [ProjectsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, DataService],
})
export class AppModule {}
