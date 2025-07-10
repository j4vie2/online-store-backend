// Value Object - principio KISS (simple pero completo)
export class Address {
  constructor(
    public readonly street: string,
    public readonly city: string,
    public readonly state: string,
    public readonly zipCode: string,
    public readonly country: string
  ) {
    if (!street || !city) {
      throw new Error('Address requires street and city');
    }
  }
}