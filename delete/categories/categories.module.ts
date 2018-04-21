import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryRoutingModule} from "./category-routing.module";
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category.component';
import {CoreModule} from "../core/core.module";
import {CategoriesService} from "./categories.service";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CategoryRoutingModule,
  ],
  exports: [
    CategoryListComponent,
    CategoryComponent
  ],
  declarations: [
    CategoryListComponent,
    CategoryComponent
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoriesModule { }
