import { User } from '../../domain/user/user.entity';
import { UserRepository } from '../../ports/repositories/user.repository.interface';
import { UserRole } from '../../domain/user/user-role.enum';
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

// Servicio - principio SRP (solo autenticación)
@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(email: string, password: string): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const user = new User(
      'user_' + Date.now(), // ID temporal
      email,
      password,
      [UserRole.CUSTOMER]
    );

    await this.userRepository.save(user);
    return user;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !user.validatePassword(password)) {
      throw new Error('Invalid credentials');
    }

    return jwt.sign(
      { sub: user.id, email: user.email, roles: user.roles },
      'secret_key', // En producción usar variable de entorno
      { expiresIn: '1h' }
    );
  }
}