import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Products } from './product.enum';

@Injectable()
export class ProductsService {

  constructor(private httpService: HttpService) { }

  getProductList() {
    // return this.httpService.getData('/api/product');
    return Products;
  }

  addProduct(data: object) {
    return this.httpService.postData('/api/product', null, data);
  }

  removeProduct(data: object) {
    return this.httpService.deleteData('/api/product', data);
  }
}
