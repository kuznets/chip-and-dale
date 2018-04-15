import { Injectable } from '@angular/core';
import { ApiWorkerService } from '../api-worker.service';
import { Products } from './product.enum';

@Injectable()
export class ProductsService {

  constructor(private apiWorkerService: ApiWorkerService) { }

  getProductList() {
    // return this.apiWorkerService.getData('/api/product');
    return Products;
  }

  addProduct(data: object) {
    return this.apiWorkerService.postData('/api/product', null, data);
  }

  removeProduct(data: object) {
    return this.apiWorkerService.deleteData('/api/product', data);
  }
}
