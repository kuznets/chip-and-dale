import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {CatalogModule} from './catalog/catalog.module';
import {DetailModule} from './detail/detail.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogModule,
    DetailModule,
    ProductsRoutingModule
  ],
  declarations: []
})
export class ProductsModule { }
