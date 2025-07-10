import { Customer } from '../../domain/customer/customer.entity';
import { ID } from '../../domain/shared/types';

// Puerto - principio ISP (interfaz específica)
export interface CustomerRepository {
  save(customer: Customer): Promise<void>;
  findById(id: ID): Promise<Customer | null>;
  findByUserId(userId: ID): Promise<Customer | null>;
}