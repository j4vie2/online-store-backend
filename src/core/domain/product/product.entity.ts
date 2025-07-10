import { ID } from '../shared/types';

// Entidad Product - principio DRY (centraliza lógica de stock)
export class Product {
  constructor(
    public readonly id: ID,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public stock: number
  ) {
    if (price <= 0) throw new Error('Price must be positive');
  }

  updateStock(quantity: number): void {
    if (this.stock + quantity < 0) {
      throw new Error('Insufficient stock');
    }
    this.stock += quantity;
  }

  get currentStock(): number {
    return this.stock;
  }
}