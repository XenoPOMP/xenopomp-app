import { Module } from '@nestjs/common';

import { UserService } from '../../routes/user';
import { PrismaService } from '../prisma.service';
import { RolesService } from '../roles';

import { EditableStringController } from './editable-string.controller';
import { EditableStringService } from './editable-string.service';

@Module({
  controllers: [EditableStringController],
  providers: [EditableStringService, PrismaService, RolesService, UserService],
})
export class EditableStringModule {}
