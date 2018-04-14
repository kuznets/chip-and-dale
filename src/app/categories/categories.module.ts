import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoriesService } from './categories.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CategoryListComponent
  ],
  declarations: [CategoryListComponent]
})
export class CategoriesModule { }
