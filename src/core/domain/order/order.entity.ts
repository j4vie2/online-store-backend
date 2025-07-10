import { OrderItem } from './order-item.entity';
import { Customer } from '../customer/customer.entity';
import { ID } from '../shared/types';

// Entidad Order - principio SRP (solo maneja lógica de órdenes)
export class Order {
  private items: OrderItem[] = [];
  public status: 'PENDING' | 'PROCESSED' | 'CANCELLED' = 'PENDING';

  constructor(
    public readonly id: ID,
    public customer: Customer
  ) {}

  addItem(productId: ID, quantity: number, price: number): void {
    this.items.push(new OrderItem(productId, quantity, price));
  }

  calculateTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  get orderItems(): ReadonlyArray<OrderItem> {
    return [...this.items];
  }
}