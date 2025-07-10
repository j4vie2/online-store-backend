import { Order } from '../../domain/order/order.entity';
import { ID } from '../../domain/shared/types';

// Puerto - principio ISP
export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: ID): Promise<Order | null>;
  findAll(): Promise<Order[]>;
}