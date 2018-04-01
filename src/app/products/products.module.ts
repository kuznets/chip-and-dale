import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsRoutingModule} from "./products-routing.module";
import {ProductDetailModule} from "./product-detail/product-detail.module";
import {ProductDetailEditModule} from "./product-detail-edit/product-detail-edit.module";
import {CategoryListComponent} from "../shared/components/category-list/category-list.component";
import {ProductListComponent} from "./product-list/product-list.component";
import { ProductsComponent } from './products.component';
import {CoreModule} from "../core/core.module";
import { ProductsFiltersComponent } from './products-filters/products-filters.component';


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
    ProductsComponent,
    ProductsFiltersComponent
  ],
  declarations: [
    ProductListComponent,
    CategoryListComponent,
    ProductsComponent,
    ProductsFiltersComponent
  ]
})
export class ProductsModule { }
