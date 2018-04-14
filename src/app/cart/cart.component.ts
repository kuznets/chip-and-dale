import { Component, OnInit } from '@angular/core';
import {Cart} from "./cart.interface";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns = ['position', 'name', 'amount', 'price', 'total'];
  public cartList: Cart[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.table(this.cartService.getCardProducts());
    this.cartList = this.cartService.getCardProducts();
  }

}
