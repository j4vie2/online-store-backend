import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../../core/application/services/auth.service';
import { RegisterDto } from '../../dtos/auth/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto.email, registerDto.password);
  }

  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    return this.authService.login(email, password);
  }
}