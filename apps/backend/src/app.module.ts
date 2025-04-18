import { Module, forwardRef } from '@nestjs/common';
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

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProjectsModule,
    AuthModule,
    UserModule,
    forwardRef(() => RolesModule),
    StatsModule,
    FeatureRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, RolesService, UserService],
})
export class AppModule {}
