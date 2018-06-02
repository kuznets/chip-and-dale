import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { OrderComponent } from "./order/order.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {path: 'cart', component: CartComponent, children: [
    {path: '', component: ListComponent},
    {path: 'order', component: OrderComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
