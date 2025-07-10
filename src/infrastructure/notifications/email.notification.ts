import { Notification } from '../../core/ports/notifications/notification.interface';
import { Injectable } from '@nestjs/common';

// Adaptador concreto - principio LSP
@Injectable()
export class EmailNotification implements Notification {
  async send(message: string): Promise<void> {
    console.log(`Sending email: ${message}`);
    // Implementación real usaría nodemailer o similar
  }
}