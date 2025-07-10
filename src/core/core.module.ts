import { Module } from '@nestjs/common';
import { ProductsModule } from './products.module';
import { OrdersModule } from './orders.module';
import { UsersModule } from './users.module';
import { CustomersModule } from './customers.module';
import { ProductsService } from './application/services/products.service';
import { OrdersService } from './application/services/orders.service';
import { UsersService } from './application/services/users.service';
import { CustomersService } from './application/services/customers.service';
import { AuthService } from './application/services/auth.service';
import { InventoryService } from './application/services/inventory.service';
import { ReportsService } from './application/services/reports.service';

@Module({
  imports: [ProductsModule, OrdersModule, UsersModule, CustomersModule],
  providers: [ProductsService, OrdersService, UsersService, CustomersService, AuthService, InventoryService, ReportsService]
})
export class CoreModule {}
