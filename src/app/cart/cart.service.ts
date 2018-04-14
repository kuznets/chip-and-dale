import { Injectable } from '@angular/core';
import {ApiWorkerService} from "../api-worker.service";
import {LocalStorageService} from "../local-storage.service";
import {cart} from './cart.enum';

@Injectable()
export class CartService {

  constructor(private apiWorkerService: ApiWorkerService, private lc: LocalStorageService){}
  //TODO private lc: LocalStorageService будем ли хранить так данные...

  getCardProducts(){
    //return this.apiWorkerService.getData('/api/card');
    return cart;
  }

  addToCard(data: object){
    return this.apiWorkerService.postData('/api/card', null, data);
  }

  removeFromCard(data: object){
    return this.apiWorkerService.deleteData('/api/card', data);
  }

  clearCard(data: object){
    return this.apiWorkerService.deleteData('/api/card', data);
  }

}
