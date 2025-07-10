import { ID } from '../shared/types';

// Value Object - principio KISS (simple pero inmutable)
export class OrderItem {
  constructor(
    public readonly productId: ID,
    public readonly quantity: number,
    public readonly price: number
  ) {
    if (quantity <= 0) throw new Error('Quantity must be positive');
    if (price <= 0) throw new Error('Price must be positive');
  }
}