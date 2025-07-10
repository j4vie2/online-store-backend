import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products/products.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { ReportsController } from './controllers/reports/reports.controller';
import { CoreModule } from '../core/core.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [CoreModule, InfrastructureModule],
  controllers: [ProductsController, OrdersController, AuthController, CustomersController, ReportsController]
})
export class ApiModule {}
