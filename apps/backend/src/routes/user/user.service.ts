import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash, verify } from 'argon2';

import { PrismaService } from '../../features';
import { AuthDto } from '../auth/dto';

type Include = Parameters<PrismaService['user']['findUnique']>[0]['include'];

export type ExactUserType =
  | {
      // Login and password are registered to some user
      type: 'exact';
    }
  | {
      // User with provided login exists, but password is different
      type: 'loginOnly';
    }
  | {
      // User has nothing same with provided data
      type: 'different';
    };

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: User['id'], include?: Include) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        ...include,
      },
    });
  }

  async getByLogin(login: User['login']): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        login,
      },
    });
  }

  async isExact({ login, password }: AuthDto): Promise<ExactUserType> {
    const oldUser = await this.getByLogin(login);

    // User is not of given kind
    if (oldUser === null) {
      return {
        type: 'different',
      };
    }

    // User is exact one
    if (await verify(oldUser.password, password)) {
      return {
        type: 'exact',
      };
    }

    return {
      type: 'loginOnly',
    };
  }

  async getMany() {
    return this.prisma.user.findMany();
  }

  async create(dto: AuthDto) {
    const newUser: Pick<User, 'login' | 'password'> = {
      login: dto.login,
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: newUser,
    });
  }

  async updateById(id: User['id'], dto: AuthDto) {
    let data = dto;

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      select: {
        name: true,
        login: true,
      },
    });
  }

  async deleteById(id: User['id']) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
