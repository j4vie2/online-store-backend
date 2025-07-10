import { Product } from "@core/domain/product/product.entity";
import { ProductRepository } from "@core/ports/repositories/product.repository.interface";
import { InventoryObserver } from "../observers/inventory.observer";
/**
 * Aplica Observer para notificar cambios en inventario
 * Justificación: Desacopla la lógica de notificación de la gestión de stock
 * Cumple con DIP (SOLID) - depende de abstracciones, no implementaciones
 */
export class InventoryService {
    private observers: InventoryObserver[] = [];
  
    constructor(private productRepository: ProductRepository) {}
  
    addObserver(observer: InventoryObserver): void {
      this.observers.push(observer);
    }
  
    async updateStock(productId: string, quantity: number): Promise<void> {
      const product = await this.productRepository.findById(productId);
      product.updateStock(quantity);
      
      // Notifica a los observadores
      this.observers.forEach(observer => {
        observer.onStockChanged(productId, product.stock);
      });
    }

    async checkStock(productId: string): Promise<Product> {
        return await this.productRepository.findById(productId);
    }
  }