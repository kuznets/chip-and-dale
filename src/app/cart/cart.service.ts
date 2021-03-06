import { Injectable } from '@angular/core';
import { LocalStorageService } from '../core/local-storage.service';
import { HttpService } from '../core/http.service';
// import { cart } from './cart.enum';
import { Subject } from 'rxjs/Subject';
import { CatalogService } from '../catalog/catalog.service';
import { Cart } from "./cart.interface";

@Injectable()
export class CartService {

  public cartCount$: Subject<number> = new Subject<number>();
  // public cart: Cart[];
  public cartData: object;
  public cartProducts: any;
  public cartID: string;

  constructor(
    private httpService: HttpService,
    private lss: LocalStorageService,
    private catalog: CatalogService) {}

  updateSubscribes(res: any) {
    this.cartProducts = res.products;
    this.cartData = res;
    this.cartCount$.next(res.products.length);
  }

  getCardProducts() {
    if (this.lss.getItem('cart')) {
      this.cartID = this.lss.getItem('cart');
      this.httpService.getData('/api/cart', {cart_id: this.cartID}).subscribe(
        res => {
          console.log('res get', res);
          this.updateSubscribes(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  addToCard(data: Cart) {
    if (!this.cartID) {
      let user = this.lss.getItem('user'),
          cartObject = {
            products: [`${data._id}:1`],
            uid: (user && user.username ? user.username : `${new Date().getTime()}-${new Date().getUTCDay()}`),
            count: 1,
            total_price: data.price,
            description: ''
          };
      this.httpService.postData('/api/cart', cartObject, {}).subscribe(
        (res: any) => {
          console.log('res', res, data);
          this.updateSubscribes(res);
          this.cartID = res._id;
          this.lss.setItem('cart', res._id);
        },
        (err: any) => {
          console.log('err', err, data);
        }
      );
    } else {
      let cartObject = {
        product: data._id,
        price: data.price,
        amount_order: 1
      };

      this.httpService.putData(`/api/cart/${this.cartID}/add`, cartObject, {}).subscribe(
        (res: any) => {
          console.log('res', res, data);
          this.updateSubscribes(res);
        },
        (err: any) => {
          console.log('err', err, data);
        }
      );
      // this.cartProducts.products.push(`${data._id}:${data.amount}`);
      // this.cartProducts.count = this.cartProducts.products.length;
      // this.cartProducts.total_price = (this.cartProducts.total_price ? this.cartProducts.total_price : 0) + data.price;
      // this.cartCount$.next(this.cartProducts.products.length);
      // this.lss.setItem('cart', this.cartProducts);
    }
  }

  removeFromCard(data: any) {
    let cartObject = {
      product: data._id,
      price: data.price
    };

    this.httpService.putData(`/api/cart/${this.cartID}/remove`, cartObject, {}).subscribe(
      res => {
        this.updateSubscribes(res);
      },
      err => {
        console.log(err, data);
      }
    );
  }

  updateCart(data: Cart) {
    let cartObject = {
      product: data._id,
      amount_order: data.amount_order,
      price: data.price
    };

    this.httpService.putData(`/api/cart/${this.cartID}/update`, cartObject, {}).subscribe(
      res => {
        this.updateSubscribes(res);
      },
      err => {
        console.log(err, data);
      }
    );
  }

  clearCart() {
    return this.httpService.deleteData(`/api/cart/${this.cartID}`, {}).subscribe(
      res => {
        let data = {
          products: []
        };
        this.lss.delItem('cart');
        this.cartID = null;
        this.updateSubscribes(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
