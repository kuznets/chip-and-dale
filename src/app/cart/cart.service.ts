import { Injectable } from '@angular/core';
import { LocalStorageService } from '../core/local-storage.service';
import { HttpService } from '../core/http.service';
import { cart } from './cart.enum';

@Injectable()
export class CartService {

  constructor(private httpService: HttpService, private lc: LocalStorageService) {}
  // TODO private lc: LocalStorageService будем ли хранить так данные...

  getCardProducts() {
    // return this.httpService.getData('/api/card');
    return cart;
  }

  addToCard(data: object) {
    return this.httpService.postData('/api/card', null, data);
  }

  removeFromCard(data: object) {
    return this.httpService.deleteData('/api/card', data);
  }

  clearCard(data: object) {
    return this.httpService.deleteData('/api/card', data);
  }

}
