import { Module } from '@nestjs/common';

import { PrismaService } from '../../features';
import { RolesService } from '../../features/roles';
import { UserService } from '../user';

import { FeatureRequestController } from './feature-request.controller';
import { FeatureRequestService } from './feature-request.service';

@Module({
  controllers: [FeatureRequestController],
  providers: [FeatureRequestService, RolesService, PrismaService, UserService],
})
export class FeatureRequestModule {}
