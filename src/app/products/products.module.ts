import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsRoutingModule} from "./products-routing.module";
import {ProductDetailModule} from "./product-detail/product-detail.module";
import {ProductDetailEditModule} from "./product-detail-edit/product-detail-edit.module";
import {CategoryListComponent} from "./components/category-list/category-list.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import { ProductsLayoutComponent } from './components/products-layout/products-layout.component';
import {CoreModule} from "../core/core.module";


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProductDetailModule,
    ProductDetailEditModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductDetailModule,
    ProductDetailEditModule,
    ProductsLayoutComponent
  ],
  declarations: [
    ProductListComponent,
    CategoryListComponent,
    ProductsLayoutComponent
  ]
})
export class ProductsModule { }
