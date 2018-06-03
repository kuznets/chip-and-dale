import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { OrderComponent } from "./order/order.component";
import { CartComponent } from './cart.component';
import { CoreModule } from '../core/core.module';
import { CartService } from './cart.service';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from "@angular/forms";
import { OrderService } from "./order/order.service";

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [
    CartComponent
  ],
  providers: [
    CartService,
    OrderService
  ],
  declarations: [CartComponent, OrderComponent, ListComponent]
})
export class CartModule { }
