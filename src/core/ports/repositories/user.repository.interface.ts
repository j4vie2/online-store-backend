import { User } from '../../domain/user/user.entity';
import { ID } from '../../domain/shared/types';

// Puerto - principio DIP (depende de abstracción)
export interface UserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: ID): Promise<User | null>;
}