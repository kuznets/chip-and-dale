import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from "./catalog.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
    {path: '', component: CatalogComponent, children: [
        {path: '', component: ListComponent},
        {path: 'category/:slug', component: ListComponent},
        {path: 'product/:slug', component: ProductDetailComponent}
      ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
