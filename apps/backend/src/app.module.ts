import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { PrismaService } from './prisma.service';
import { LocalizationService } from './localization.service';

@Module({
  imports: [ProjectsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, LocalizationService],
})
export class AppModule {}
