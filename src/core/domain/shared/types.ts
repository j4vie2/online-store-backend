export type ID = string;
export type Email = string;
export type DateTime = Date;

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export type AddressType = 'SHIPPING' | 'BILLING';