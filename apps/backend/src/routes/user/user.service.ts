import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'argon2';

// eslint-disable-next-line ts/consistent-type-imports
import type { CrudService } from '@repo/nest';

import { PrismaService } from '../../features';
import { AuthDto } from '../auth/dto';

import { UserDto } from './dto';

type Include = Parameters<PrismaService['user']['findUnique']>[0]['include'];

@Injectable()
export class UserService implements CrudService<User, AuthDto, UserDto> {
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

  async getByEmail(email: User['email']): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getMany() {
    return this.prisma.user.findMany();
  }

  async create(dto: AuthDto) {
    const newUser: Pick<User, 'email' | 'password'> = {
      email: dto.email,
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: newUser,
    });
  }

  async updateById(id: User['id'], dto: UserDto) {
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
        email: true,
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
