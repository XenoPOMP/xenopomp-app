import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UseGuards,
  applyDecorators,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Permissions } from '@prisma/client';

import { SUPERUSER_PERM } from '@repo/constants';

import { RolesService } from '../../../features/roles';
import { getUserFromCtx } from '../decorators';

export type PermissionList = Partial<Record<keyof typeof Permissions, boolean>>;

const SetRoles = Reflector.createDecorator<PermissionList>();

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly rolesService: RolesService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(ctx: ExecutionContext) {
    const user = getUserFromCtx(ctx);
    const userPerms = await this.rolesService.getPermissionsById(user.id);

    const routePerms = this.reflector.get<PermissionList>(
      SetRoles,
      ctx.getHandler(),
    );

    // Superuser entry
    if (userPerms.includes(SUPERUSER_PERM)) {
      return true;
    }

    // Filter permissions by enabled ones
    const reqPerms = Object.entries(routePerms)
      .filter(([_, enabled]) => enabled)
      .map(([perm]) => perm as Permissions);

    // Here user is not super one. Checking if SUPERUSER_PERM permission is required.
    // If it is, denying request (because only superuser can access endpoint).
    if (reqPerms.includes(SUPERUSER_PERM)) {
      return false;
    }

    // Check if requested permissions are fulfilled
    return reqPerms.every(item => userPerms.includes(item));
  }
}

/**
 * Checks if user from context can access this endpoint.
 * @param perms
 * @constructor
 * @example
 * // USE BEFORE Auth DECORATOR!!!!
 * \@HttpCode(200)
 * \@Get('today')
 * \@RequiresPermissions({})
 * \@Auth()
 *   async getTodaySession(@CurrentUser('id') userId: string) {
 *     return this.pomodoroService.getTodaySession(userId);
 *   }
 */
export const RequiresPermissions = (perms: PermissionList) =>
  applyDecorators(SetRoles(perms), UseGuards(PermissionsGuard));
