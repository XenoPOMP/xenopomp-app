import { Injectable, OnModuleInit } from '@nestjs/common';
import { EditableString } from '@prisma/client';

import { STRING_NAMES } from '@repo/constants';

import { PrismaService } from '../prisma.service';

import { EditableStringDto } from './dto';

@Injectable()
export class EditableStringService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    // Create default string if are not defined

    const defaultStrings: EditableStringDto[] = [
      {
        name: STRING_NAMES.ABOUT_ME.TITLE,
        value: 'Александр Наумов, 20 y.o',
      },
      {
        name: STRING_NAMES.ABOUT_ME.DESC,
        value:
          'Front-end разработчик с опытом работы с React, TypeScript, Next.js и другими. Я всегда ищу новые задачи для решения',
      },
    ];

    for (const dto of defaultStrings) {
      await this.createNew(dto);
    }
  }

  async getByName(name: EditableString['name']) {
    return this.prisma.editableString.findUnique({
      where: {
        name,
      },
    });
  }

  async createNew(dto: EditableStringDto) {
    const { name } = dto;

    // Create new value if old does not exist
    if (await this.exists(name)) {
      return this.getByName(name);
    }

    return this.prisma.editableString.create({
      data: dto,
    });
  }

  async updateByName(dto: EditableStringDto) {
    const { name } = dto;

    return this.prisma.editableString.update({
      where: {
        name,
      },
      data: dto,
    });
  }

  async exists(name: EditableString['name']) {
    const count = await this.prisma.editableString.count({
      where: {
        name,
      },
    });

    return count > 0;
  }
}
