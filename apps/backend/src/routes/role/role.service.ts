import { Injectable } from '@nestjs/common';
import { Permissions, User, UserType } from '@prisma/client';

import { FetchUserType } from '@repo/backend-types';
import { SUPERUSER_PERM } from '@repo/constants';

import { RolesService } from '../../features/roles';

@Injectable()
export class RoleService {
  constructor(private readonly rolesService: RolesService) {}

  async hasUncommonPerms(userId: User['id']): Promise<boolean>;
  async hasUncommonPerms(perms: Permissions[]): Promise<boolean>;
  async hasUncommonPerms(data: User['id'] | Permissions[]): Promise<boolean> {
    // True if permission list is passed in argument
    const arePermsPrefetched = Array.isArray(data);
    // Fetch permissions anyway
    const permissions = arePermsPrefetched
      ? data
      : await this.rolesService.getPermissionsById(data);

    return permissions.length > 0;
  }

  async getRoleByUserId(userId: User['id']): Promise<FetchUserType> {
    const perms = await this.rolesService.getPermissionsById(userId);

    // User is super one here
    if (perms.includes(SUPERUSER_PERM)) {
      return UserType.superuser;
    }

    // User have some other uncommon perms
    if (await this.hasUncommonPerms(perms)) {
      return UserType.admin;
    }

    return UserType.default;
  }
}
