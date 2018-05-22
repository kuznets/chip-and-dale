import { Injectable } from '@angular/core';
import { Category } from './category.interface';
import { HttpService } from '../core/http.service';
import { Observable } from 'rxjs/Observable';
import { Product } from './products.interface';
import { Subject } from 'rxjs/Subject';
import { Categories } from './category.enum';
import 'rxjs/add/observable/from';

@Injectable()
export class CatalogService {

  private _categories: Category[] = Categories;

  public categories$: Subject<Category> = new Subject();
  public products$: Observable<any>;

  constructor(private httpService: HttpService) { }

  getCategories() {
    return this._categories.forEach(el => this.categories$.next(el));
  }

  addCategories(category: Category) {
    this.categories$.next(category);
  }

  getProductList() {
    return this.httpService.getData(`/api/products`);
  }

  // TODO Check It !!!
  getOneProduct(slug: string) {
    return this.httpService.getData(`/api/product/${slug}`);
  }

  createProduct(data: object) {
    return this.httpService.postData(`/api/product`, null, data);
  }

  updateOneProduct(slug: string, data: object) {
    return this.httpService.postData(`/api/product/${slug}`, null, data);
  }

  deleteOneProduct(slug: string) {
    return this.httpService.deleteData(`/api/product/${slug}`, null);
  }
}
