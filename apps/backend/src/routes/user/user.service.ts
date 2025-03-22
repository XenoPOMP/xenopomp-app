import { Injectable } from '@nestjs/common';

// eslint-disable-next-line ts/consistent-type-imports
import { PrismaService } from '../../features';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
}
