import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from '@prisma/client';

/**
 * Pulls up user from execution context.
 * The 'authRequired' flag is required using Endpoint decorator!
 * @param ctx
 */
export const getUserFromCtx = (ctx: ExecutionContext): User => {
  const request = ctx.switchToHttp().getRequest<{ user: User }>();
  return request.user;
};

/**
 * Passes current logged user. Uses ExecutionContext, modified by jwt library.
 *
 * @example
 * \@Endpoint('GET', '/test', {
 *   authRequired: true,
 * })
 * test(@CurrentUser() user: User, @CurrentUser('name') userName: User['name']) {
 *   console.log({ user, name });
 * }
 */
export const CurrentUser = createParamDecorator(
  (property: keyof User | undefined, ctx: ExecutionContext) => {
    const user: User = getUserFromCtx(ctx);

    // Check if selecting property name is not defined.
    // If it is so, return the whole user object.
    if (!property) {
      return user;
    }

    // Otherwise, return only selected property
    return user[property];
  },
);
