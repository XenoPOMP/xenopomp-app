import { Injectable } from '@nestjs/common';
import type { User } from '@prisma/client';

import type { CrudService } from '@repo/nest';

// eslint-disable-next-line ts/consistent-type-imports
import { PrismaService } from '../../features';
import { AuthDto } from '../auth/dto';

// eslint-disable-next-line ts/consistent-type-imports
import { UserDto } from './dto';

@Injectable()
export class UserService
  implements Pick<CrudService<User, AuthDto, UserDto>, 'getById' | 'getMany'>
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

  async create(dto: UserDto) {
    // eslint-disable-next-line no-console
    console.log(dto);
  }
}
