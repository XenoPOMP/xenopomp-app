import { Controller } from '@nestjs/common';

// eslint-disable-next-line ts/consistent-type-imports
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
