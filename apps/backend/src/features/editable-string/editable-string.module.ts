import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { EditableStringController } from './editable-string.controller';
import { EditableStringService } from './editable-string.service';

@Module({
  providers: [EditableStringService, PrismaService],
  controllers: [EditableStringController],
})
export class EditableStringModule {}
