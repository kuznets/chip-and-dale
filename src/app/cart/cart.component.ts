import { Component, OnInit } from '@angular/core';
import {Cart} from "./cart.interface";
import {cart} from './cart.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns = ['position', 'name', 'amount', 'price', 'total'];
  public cartList: Cart[] = cart;

  constructor() { }

  ngOnInit() {
  }

}
