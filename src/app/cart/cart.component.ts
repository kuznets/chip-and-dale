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
  public total_price: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateList();
    this.cartService.cartCount$.subscribe(count => this.updateList());
  }

  updateList(){
    this.cartList = this.cartService.cartProducts;
    if (this.cartList) {
      this.cartList.forEach(item => {
        console.log(this.total_price);
        this.total_price += item.price;
      });
    }
  }

  delItem(data: Cart) {
    this.cartService.removeFromCard(data);
    // this.cartService.removeFromCard(data);

    // this.cartList.forEach((el, key) => {
    //   console.log(el, key, el.slug == slug, this.cartList);
    //   if (el.slug == slug) delete this.cartList[key];
    // });
  }
}
