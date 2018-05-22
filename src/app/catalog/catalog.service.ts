import { Injectable } from '@angular/core';
import { Category } from './category.interface';
import { HttpService } from '../core/http.service';
import { Products } from './products.enum';
import { Observable } from 'rxjs/Observable';
import { Product } from './products.interface';
import { Subject } from 'rxjs/Subject';
import { Categories } from './category.enum';
import 'rxjs/add/observable/from';

@Injectable()
export class CatalogService {

  private _categories: Category[] = Categories;
  private _products:   Product[] = Products;

  public categories$: Subject<Category> = new Subject();
  public products$: Observable<any>;

  constructor(private httpService: HttpService) { }

  getCategories() {
    return this._categories.forEach(el => this.categories$.next(el));
  }

  addCategories(category: Category) {
    // this.categories$.next(category);
  }

  getProductList() {
    return this.httpService.getData('/api/products');
  }

  addProduct(data: object) {
    return this.httpService.postData('/api/product', null, data);
  }

  removeProduct(data: object) {
    return this.httpService.deleteData('/api/product', data);
  }


}
