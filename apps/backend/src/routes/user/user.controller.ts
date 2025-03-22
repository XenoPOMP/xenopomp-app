import { Body, Controller } from '@nestjs/common';

import { Endpoint } from '../../decorators';

// eslint-disable-next-line ts/consistent-type-imports
import { UserDto } from './dto';
// eslint-disable-next-line ts/consistent-type-imports
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Endpoint('POST', '/test', {
    validate: true,
  })
  async test(@Body() dto: UserDto) {}
}
