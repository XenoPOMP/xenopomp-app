import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'argon2';

import { PrismaService } from '../../features';
import { AuthDto } from '../auth/dto';

type Include = Parameters<PrismaService['user']['findUnique']>[0]['include'];

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
