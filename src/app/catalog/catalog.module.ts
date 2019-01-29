import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';

import { CoreModule } from "../core/core.module";
import { CatalogComponent } from './catalog.component';
import { CategoriesComponent } from "./categories/categories.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CatalogService } from "./catalog.service";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    CategoriesComponent,
    ProductDetailComponent,
    ListComponent
  ],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
