import { Injectable } from '@angular/core';
import { Category } from './category.interface';

@Injectable()
export class CategoriesService {

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  private _categories: Category[] = [
    { name: 'category1', link: 'category1' },
    { name: 'category2', link: 'category2' },
    { name: 'category3', link: 'category3' },
    { name: 'category4', link: 'category4' },
    { name: 'category5', link: 'category5' },
    { name: 'category6', link: 'category6' },
  ];

constructor() { }

}
