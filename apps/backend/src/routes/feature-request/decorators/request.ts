import { HttpStatus, applyDecorators } from '@nestjs/common';

import { Endpoint } from '../../../decorators';
import { PermissionList } from '../../auth/guards';

export const FeatureRequest = (route: string, perms: PermissionList) => {
  return applyDecorators(
    Endpoint('GET', route, {
      code: HttpStatus.NO_CONTENT,
      authRequired: true,
      permissions: perms,
    }),
  );
};
