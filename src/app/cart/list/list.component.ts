import { Component, OnInit } from '@angular/core';
import { Cart } from "../cart.interface";
import { CartService } from "../cart.service";
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = ['image', 'title', 'amount', 'price', 'total', 'action'];
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
      this.total_price = 0;
      this.cartList.forEach(item => {
        console.log(this.total_price);
        this.total_price += (item.price * item.amount_order);
      });
    }
  }

  updateItem(data: Cart, element: any) {
    if (element.value <= 0){
      element.value = 1;
    }

    data.amount_order = Number(element.value);
    console.log(data, element.value);
    this.cartService.updateCart(data);
  }

  delItem(data: Cart) {
    this.cartService.removeFromCard(data);
    // this.cartService.removeFromCard(data);

    // this.cartList.forEach((el, key) => {
    //   console.log(el, key, el.slug == slug, this.cartList);
    //   if (el.slug == slug) delete this.cartList[key];
    // });
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
