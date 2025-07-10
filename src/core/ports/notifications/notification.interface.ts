// Puerto - principio DIP
export interface Notification {
  send(message: string): Promise<void>;
}