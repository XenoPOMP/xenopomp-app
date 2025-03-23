import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { EditableStringService } from './editable-string.service';

@Module({
  providers: [EditableStringService, PrismaService],
})
export class EditableStringModule {}
