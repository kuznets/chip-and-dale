import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsRoutingModule} from "./products-routing.module";
import {ProductDetailModule} from "./product-detail/product-detail.module";
import {ProductDetailEditModule} from "./product-detail-edit/product-detail-edit.module";
import {CategoryComponent} from "./category/category.component";
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  imports: [
    CommonModule,
    ProductDetailModule,
    ProductDetailEditModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductDetailModule,
    ProductDetailEditModule,
    CategoryComponent,
    CategoryListComponent
  ],
  declarations: [
    CategoryComponent,
    CategoryListComponent
  ]
})
export class ProductsModule { }
