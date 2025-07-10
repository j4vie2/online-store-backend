import { Injectable } from '@nestjs/common';

/**
 * Observer para cambios en el inventario
 * 
 * Aplica:
 * - Patrón Observer: Permite múltiples observadores reaccionar a cambios
 * - OCP: Nuevos observadores se pueden añadir sin modificar InventoryService
 * - DIP: Depende de abstracción (interfaz implícita)
 */
@Injectable()
export class InventoryObserver {
  /**
   * Método llamado cuando el stock cambia
   * @param productId ID del producto afectado
   * @param newStock Nuevo nivel de stock
   */
  onStockChanged(productId: string, newStock: number): void {
    console.log(`[InventoryObserver] Stock updated - Product: ${productId}, New Stock: ${newStock}`);
    // - Notificar al departamento de compras si el stock es bajo
    // - Actualizar caché
    // - Disparar eventos del sistema
  }

  /**
   * Método llamado cuando el stock llega a cero
   * @param productId ID del producto agotado
   */
  onStockDepleted(productId: string): void {
    console.warn(`[InventoryObserver] Stock depleted for product: ${productId}`);
  }
}