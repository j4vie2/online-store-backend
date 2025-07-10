import { Product } from '../../domain/product/product.entity';
import { Injectable } from '@nestjs/common';

/**
 * Aplica Factory Method para crear productos
 * Justificación: Centraliza la lógica de creación de productos complejos
 * Cumple con SRP (SOLID) al tener una única razón de cambio
 */

@Injectable()
export class ProductFactory {
  createProduct(data: {
    name: string;
    description: string;
    price: number;
    stock?: number;
  }): Product {
    if (!data.name || data.price <= 0) {
      throw new Error('Invalid product data');
    }

    return new Product(
      'prod_' + Date.now(), // ID temporal
      data.name,
      data.description,
      data.price,
      data.stock || 0
    );
  }
}