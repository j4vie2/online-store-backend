import { OrderRepository } from "@core/ports/repositories/order.repository.interface";
import { InventoryService } from "./inventory.service";
import { NotificationSystem } from "@infrastructure/notifications/notification-system";
import { Order } from "@core/domain/order/order.entity";
import { OrderBuilder } from "../factories/order.builder";
import { Injectable } from "@nestjs/common";
import { Customer } from "@core/domain/customer/customer.entity";

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private inventoryService: InventoryService,
    private notificationSystem: NotificationSystem
  ) {}

  async placeOrder(orderData: {
    customer: Customer
    items: Array<{productId: string, quantity: number, price: number}>
  }): Promise<Order> {
    // Builder en acción
    const builder = new OrderBuilder()
      .withCustomer(orderData.customer);

    for (const item of orderData.items) {
      const product = await this.inventoryService.checkStock(item.productId);
      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product ${item.productId}`);
      }
      builder.withItem(item.productId, item.quantity, item.price);
    }

    const order = builder.build();
    await this.orderRepository.save(order);
    
    // Observer/Strategy en acción
    this.notificationSystem.sendAll(`Order ${order.id} placed successfully`);
    
    return order;
  }
}