import { Injectable } from '@angular/core';
import { Category } from "./category.interface";
import { HttpService } from "../http.service";
import { Products } from "./products.enum";
import { Observable } from "rxjs/Observable";
import { Product } from "./products.interface";
import { Subject } from "rxjs/Subject";
import { Categories } from "./category.enum";
import 'rxjs/add/observable/from';

@Injectable()
export class CatalogService {

  constructor(private httpService: HttpService) { }

  private _categories: Category[] = Categories;
  private _products:   Product[] = Products;

  public categories$ = Observable.from(this._categories);
  public products$ = Observable.from(this._products);

  getCategories() {
    return this.categories$
  }

  // addCategories(category: Category) {
  //   this.categories$.next(category);
  // }

  getProductList() {
    // return this.httpService.getData('/api/product');
    return this.products$;
  }

  addProduct(data: object) {
    return this.httpService.postData('/api/product', null, data);
  }

  removeProduct(data: object) {
    return this.httpService.deleteData('/api/product', data);
  }


}
