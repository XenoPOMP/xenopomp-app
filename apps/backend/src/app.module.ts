import { Module } from '@nestjs/common';

import { AppController, AppService } from '~/app';
import { DataService, PrismaService } from '~/features';

import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ProjectsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, DataService],
})
export class AppModule {}
