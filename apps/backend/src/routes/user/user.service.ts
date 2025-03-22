import { Injectable } from '@nestjs/common';
import type { User } from '@prisma/client';

import type { CrudService } from '@repo/nest';

// eslint-disable-next-line ts/consistent-type-imports
import { PrismaService } from '../../features';

@Injectable()
export class UserService
  implements Pick<CrudService<User, unknown, unknown>, 'getById' | 'getMany'>
{
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: User['id']) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getMany() {
    return this.prisma.user.findMany();
  }
}
