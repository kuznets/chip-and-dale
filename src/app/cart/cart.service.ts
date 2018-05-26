import { Injectable } from '@angular/core';
import { LocalStorageService } from '../core/local-storage.service';
import { HttpService } from '../core/http.service';
import { cart } from './cart.enum';
import { Subject } from "rxjs/Subject";
import { Cart } from "./cart.interface";

@Injectable()
export class CartService {

  public cartCount: number = 0;
  public cart: Cart[] = cart;
  public cartProducts: Array<object>;

  constructor(private httpService: HttpService, private lss: LocalStorageService) {}

  getCardProducts() {
    if (this.lss.getItem('user')){
      // return this.httpService.getData('/api/card').subscribe(
      //       res => {
      //         res.forEach(el => {
      //            this.cartProducts$.next(el);
      //            this.cartCount++;
      //         });
      //       },
      //       err => {
      //         console.log(err, data);
      //       }
      //     );
    } else {
      this.cartProducts = !this.lss.getItem('cart') ? this.lss.setItem('cart', {
        products: []
      }) : this.lss.getItem('cart');
      this.cartCount = this.cartProducts.products.length;
      console.log(this.cartProducts);
    }

  }

  addToCard(data: Cart) {
    if (this.lss.getItem('user')) {
      // return this.httpService.postData('/api/card/.../add', null, data).subscribe(
      //       res => {
      //         this.cartProducts$.next(data);;
      //          this.cartCount++;
      //       },
      //       err => {
      //         console.log(err, data);
      //       }
      //     );
    } else {
      this.cartProducts.products.push(data);
      this.cartProducts.count = this.cartProducts.products.length;
      this.cartProducts.total_price = (this.cartProducts.total_price ? this.cartProducts.total_price : 0) + data.price;
      this.cartCount = this.cartProducts.products.length;
      this.lss.setItem('cart', this.cartProducts);
    }
  }

  removeFromCard(data: string) {
    if (this.lss.getItem('user')) {
      // return this.httpService.deleteData('/api/card/.../remove', data).subscribe(
      //       res => {
      //         this.cartProducts$.next(data);
      //       },
      //       err => {
      //         console.log(err, data);
      //       }
      //     );
      // this.cartProducts$.
    } else {
      let newVal = [];
      this.cartProducts = this.lss.getItem('cart');
      this.cartProducts.products.forEach((item,key) => {
        console.log(item,key, item._id == data._id);
        if (item._id != data._id) newVal.push(item);
      });
      this.cartProducts.products = newVal;
      this.cartProducts.count = this.cartProducts.products.length;
      this.cartProducts.total_price = this.cartProducts.total_price - data.price;
      this.cartCount = this.cartProducts.products.length;
      this.lss.setItem('cart', this.cartProducts);
    }
  }

  clearCard(data: object) {
    if (this.lss.getItem('user')) {
      return this.httpService.deleteData('/api/card', data);
    } else {
      this.lss.delItem('cart')
    }
  }

}
