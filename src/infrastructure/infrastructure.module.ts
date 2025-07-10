import { Module } from '@nestjs/common';
import { InMemoryUserRepository } from './persistence/in-memory/user.repository';

@Module({
  providers: [
    {
      provide: 'UserRepository',
      useClass: InMemoryUserRepository
    }
  ],
  exports: ['UserRepository']
})
export class InfrastructureModule {}
