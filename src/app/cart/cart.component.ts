import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.interface';
import { CartService } from './cart.service';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns = ['position', 'title', 'amount', 'price', 'total', 'action'];
  public cartList: Cart[] = [];
  public total_price: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.cartProducts.products;
    this.total_price = this.cartService.cartProducts.total_price;
  }

  delItem(data: Cart) {
    // this.cartService.removeFromCard(slug).subscribe(
    //   res => {
    //     this.cartList.forEach((el, key) => {
    //       if (el.slug == slug) delete this.cartList[key];
    //     });
    //   }
    // );

    this.cartService.removeFromCard(data);
    this.cartList = this.cartService.cartProducts.products;
    this.total_price = this.cartService.cartProducts.total_price;

    // this.cartList.forEach((el, key) => {
    //   console.log(el, key, el.slug == slug, this.cartList);
    //   if (el.slug == slug) delete this.cartList[key];
    // });
  }
}
