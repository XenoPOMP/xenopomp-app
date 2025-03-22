import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'argon2';

import { CrudService } from '@repo/nest';

import { PrismaService } from '../../features';
import { AuthDto } from '../auth/dto';

import { UserDto } from './dto';

@Injectable()
export class UserService implements CrudService<User, AuthDto, UserDto> {
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
