import { Order } from '../../domain/order/order.entity';
import { Customer } from '../../domain/customer/customer.entity';
import { Injectable } from '@nestjs/common';

/**
 * Aplica Builder para construcción flexible de órdenes
 * Justificación: Permite construir órdenes paso a paso con diferentes configuraciones
 * Elimina la necesidad de constructores complejos (SOLID - Open/Closed)
 */
@Injectable()
export class OrderBuilder {
  private order: Order;

  constructor() {
    this.order = new Order('order_' + Date.now(), {} as Customer); // ID temporal
  }

  withCustomer(customer: Customer): this {
    this.order.customer = customer;
    return this;
  }

  withItem(productId: string, quantity: number, price: number): this {
    this.order.addItem(productId, quantity, price);
    return this;
  }

  build(): Order {
    if (!this.order.customer || this.order.orderItems.length === 0) {
      throw new Error('Incomplete order data');
    }
    return this.order;
  }
}