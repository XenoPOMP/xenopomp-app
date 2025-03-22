import { Module } from '@nestjs/common';

import { UserService } from '../../routes/user';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PrismaService, UserService],
})
export class RolesModule {}
