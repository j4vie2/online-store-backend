import { UserRole } from './user-role.enum';
import { ID } from '../shared/types';

// Entidad User - principio SRP (solo maneja autenticación)
export class User {
  constructor(
    public readonly id: ID,
    public readonly email: string,
    private password: string,
    public roles: UserRole[] = [UserRole.CUSTOMER]
  ) {}

  hasRole(role: UserRole): boolean {
    return this.roles.includes(role);
  }

  validatePassword(password: string): boolean {
    return this.password === password; // En producción usar hashing
  }

  addRole(role: UserRole): void {
    if (!this.hasRole(role)) {
      this.roles.push(role);
    }
  }
}