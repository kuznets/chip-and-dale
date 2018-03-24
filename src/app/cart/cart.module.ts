import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {CartDetailModule} from "./cart-detail/cart-detail.module";
import {CartOrderModule} from "./cart-order/cart-order.module";

@NgModule({
  imports: [
    CommonModule,
    CartDetailModule,
    CartOrderModule,
    CartRoutingModule
  ],
  exports: [
    CartDetailModule,
    CartOrderModule
  ],
  declarations: []
})
export class CartModule { }
