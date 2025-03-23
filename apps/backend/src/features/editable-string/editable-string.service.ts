import { Injectable } from '@nestjs/common';
import { EditableString } from '@prisma/client';

import { PrismaService } from '../prisma.service';

import { EditableStringDto } from './dto';

@Injectable()
export class EditableStringService {
  constructor(private readonly prisma: PrismaService) {}

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
