import { Address } from './address.value-object';
import { ID } from '../shared/types';

// Entidad Customer - principio SRP (solo datos del cliente)
export class Customer {
  constructor(
    public readonly id: ID,
    public readonly userId: ID,
    private shippingAddress: Address,
    private billingAddress: Address,
    public phone: string
  ) {}

  updateAddress(type: 'SHIPPING' | 'BILLING', address: Address): void {
    if (type === 'SHIPPING') {
      this.shippingAddress = address;
    } else {
      this.billingAddress = address;
    }
  }

  getAddress(type: 'SHIPPING' | 'BILLING'): Address {
    return type === 'SHIPPING' ? this.shippingAddress : this.billingAddress;
  }
}