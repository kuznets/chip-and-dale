import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {CartDetailModule} from "./cart-detail/cart-detail.module";
import {CartOrderModule} from "./cart-order/cart-order.module";
import { CartComponent } from './cart.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    CartDetailModule,
    CartOrderModule,
    CartRoutingModule,
    CoreModule
  ],
  exports: [
    CartDetailModule,
    CartOrderModule,
    CartComponent
  ],
  declarations: [CartComponent]
})
export class CartModule { }
