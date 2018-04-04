import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import {CoreModule} from "../../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    CoreModule
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
