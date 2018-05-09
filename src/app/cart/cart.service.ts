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
  public cartProducts$: Subject<Cart> = new Subject();

  constructor(private httpService: HttpService, private lc: LocalStorageService) {}
  // TODO private lc: LocalStorageService будем ли хранить так данные...

  getCardProducts() {
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
    return this.cart.forEach(el => {
      this.cartProducts$.next(el);
      this.cartCount++;
    });
  }

  addToCard(data: Cart) {
    // return this.httpService.postData('/api/card', null, data).subscribe(
    //       res => {
    //         this.cartProducts$.next(data);;
    //          this.cartCount++;
    //       },
    //       err => {
    //         console.log(err, data);
    //       }
    //     );

    this.cartProducts$.next(data);
    this.cartCount++;
  }

  removeFromCard(data: string) {
    // return this.httpService.deleteData('/api/card', data).subscribe(
    //       res => {
    //         this.cartProducts$.next(data);
    //       },
    //       err => {
    //         console.log(err, data);
    //       }
    //     );

    // this.cartProducts$.
    this.cartCount--;
  }

  clearCard(data: object) {
    return this.httpService.deleteData('/api/card', data);
  }

}
