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

  displayedColumns = ['position', 'name', 'amount', 'price', 'total', 'action'];
  public cartList: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartProducts$
      .do(item => {
        // console.log(item);
        this.cartList.push(item)
      })
      .subscribe();
    this.cartService.getCardProducts();
  }

  delItem(slug: string) {
    // this.cartService.removeFromCard(slug).subscribe(
    //   res => {
    //     this.cartList.forEach((el, key) => {
    //       if (el.slug == slug) delete this.cartList[key];
    //     });
    //   }
    // );

    this.cartList.forEach((el, key) => {
      console.log(el, key, el.slug == slug, this.cartList);
      if (el.slug == slug) delete this.cartList[key];
    });
  }
}
