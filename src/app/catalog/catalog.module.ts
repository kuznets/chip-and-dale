import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CatalogRoutingModule} from "./catalog-routing.module";
import {CatalogDetailModule} from "./catalog-detail/catalog-detail.module";
import {CatalogDetailEditModule} from "./catalog-detail-edit/catalog-detail-edit.module";
import {CategoryComponent} from "./category/category.component";
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  imports: [
    CommonModule,
    CatalogDetailModule,
    CatalogDetailEditModule,
    CatalogRoutingModule
  ],
  exports: [
    CatalogDetailModule,
    CatalogDetailEditModule,
    CategoryComponent,
    CategoryListComponent
  ],
  declarations: [
    CategoryComponent,
    CategoryListComponent
  ]
})
export class CatalogModule { }
