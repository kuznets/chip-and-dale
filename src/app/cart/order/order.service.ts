import { Injectable } from '@angular/core';
import { CartService } from "../cart.service";
import { LocalStorageService } from "../../core/local-storage.service";
import { HttpService } from "../../core/http.service";

@Injectable()
export class OrderService {

  constructor(private httpService: HttpService, private cart: CartService, private lss: LocalStorageService) { }

  createOrder(data) {
    return this.httpService.postData('/api/orders', data, {});
  }
}
