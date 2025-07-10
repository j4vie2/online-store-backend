import { Product } from "@core/domain/product/product.entity";
import { ProductRepository } from "@core/ports/repositories/product.repository.interface";
import { ProductFactory } from "../factories/product.factory";
import { Injectable } from "@nestjs/common";
/**
 * Servicio de productos que aplica:
 * - Dependency Injection (SOLID - DIP)
 * - Single Responsibility (SOLID - SRP)
 */
@Injectable()
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    private productFactory: ProductFactory
  ) {}

  async createProduct(productData: {
    name: string;
    description: string;
    price: number;
    stock?: number;
  }): Promise<Product> {
    // Factory Method en acción
    const product = this.productFactory.createProduct(productData);
    await this.productRepository.save(product);
    return product;
  }

  async listProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}