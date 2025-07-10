import { Product } from '../../domain/product/product.entity';
import { ID } from '../../domain/shared/types';

// Puerto - principio DIP
export interface ProductRepository {
  save(product: Product): Promise<void>;
  findById(id: ID): Promise<Product | null>;
  findAll(): Promise<Product[]>;
}