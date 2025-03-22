import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Permissions } from '@prisma/client';

import { UserService } from '../../routes/user';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RolesService implements OnModuleInit {
  private loggerCtx = 'Roles';

  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async onModuleInit() {
    const adminRoles = await this.prisma.userRole.findMany({
      where: {
        permissions: {
          has: Permissions.all,
        },
      },
    });

    // Fallback admin role
    if (!adminRoles.length) {
      Logger.log(
        'Did not found any admin role. Creating default one.',
        this.loggerCtx,
      );

      await this.prisma.userRole.create({
        data: {
          name: '<default_admin>',
          permissions: [Permissions.all],
        },
      });
    }
  }

  /** Get all user`s permissions */
  async getPermissionsById(userId: string): Promise<Permissions[]> {
    const data = await this.userService.getById(userId, {
      role: true,
    });

    const role = data?.role;

    // eslint-disable-next-line no-extra-boolean-cast
    return !!role ? role.permissions : [];
  }
}
