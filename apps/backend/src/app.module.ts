import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './features';
import { RolesModule } from './features/roles/roles.module';
import { RolesService } from './features/roles/roles.service';
import { AuthModule } from './routes/auth';
import { ProjectsModule } from './routes/projects';
import { UserModule, UserService } from './routes/user';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProjectsModule,
    AuthModule,
    UserModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, RolesService, UserService],
})
export class AppModule {}
