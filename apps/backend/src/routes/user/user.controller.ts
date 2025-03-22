import { Controller } from '@nestjs/common';

// eslint-disable-next-line ts/consistent-type-imports
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
