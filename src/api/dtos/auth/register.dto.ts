import { IsEmail, IsString, MinLength } from 'class-validator';

// DTO - principio KISS (solo datos necesarios)
export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}