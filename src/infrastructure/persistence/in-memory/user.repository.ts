import { User } from '../../../core/domain/user/user.entity';
import { UserRepository } from '../../../core/ports/repositories/user.repository.interface';
import { Injectable } from '@nestjs/common';

// Adaptador concreto - principio DIP
@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }
}