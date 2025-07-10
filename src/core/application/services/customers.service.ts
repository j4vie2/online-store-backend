import { Customer } from '../../domain/customer/customer.entity';
import { CustomerRepository } from '../../ports/repositories/customer.repository.interface';
import { UserRepository } from '../../ports/repositories/user.repository.interface';
import { Address } from '../../domain/customer/address.value-object';
import { Injectable } from '@nestjs/common';

// Servicio - principio SRP (gestión de clientes)
@Injectable()
export class CustomersService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly userRepository: UserRepository
  ) {}

  async createCustomer(
    userId: string,
    data: {
      phone: string;
      shippingAddress: Address;
      billingAddress?: Address;
    }
  ): Promise<Customer> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const customer = new Customer(
      'cust_' + Date.now(), // ID temporal
      userId,
      data.shippingAddress,
      data.billingAddress || data.shippingAddress,
      data.phone
    );

    await this.customerRepository.save(customer);
    return customer;
  }

  async getCustomerProfile(customerId: string): Promise<{
    phone: string;
    shippingAddress: Address;
    billingAddress: Address;
  }> {
    const customer = await this.customerRepository.findById(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }

    return {
      phone: customer.phone,
      shippingAddress: customer.getAddress('SHIPPING'),
      billingAddress: customer.getAddress('BILLING')
    };
  }
}