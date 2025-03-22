import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './features';
import { AuthModule } from './routes/auth/auth.module';
import { ProjectsModule } from './routes/projects';
import { UserModule } from './routes/user/user.module';

@Module({
  imports: [ProjectsModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
