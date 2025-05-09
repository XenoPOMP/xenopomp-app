import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './features';
import { RolesModule, RolesService } from './features/roles';
import { AuthModule } from './routes/auth';
import { FeatureRequestModule } from './routes/feature-request';
import { ProjectsModule } from './routes/projects';
import { StatsModule } from './routes/stats/stats.module';
import { UserModule, UserService } from './routes/user';
import { RoleModule } from './routes/role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProjectsModule,
    AuthModule,
    UserModule,
    RolesModule,
    StatsModule,
    FeatureRequestModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, RolesService, UserService],
})
export class AppModule {}
