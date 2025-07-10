import { Notification } from "@core/ports/notifications/notification.interface";

/**
 * Aplica Composite para manejar múltiples notificaciones como una sola
 * Justificación: Trata notificaciones individuales y grupos de igual forma
 * Cumple con ISP (SOLID) al no forzar a clientes a depender de interfaces que no usan
 */

export class NotificationSystem {
    private notifications: Notification[] = [];
  
    addNotification(notification: Notification): void {
      this.notifications.push(notification);
    }
  
    sendAll(message: string): void {
      this.notifications.forEach(notification => {
        notification.send(message); // Liskov Substitution (SOLID)
      });
    }
  }