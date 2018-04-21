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
    { name: 'category1', slug: 'category1' },
    { name: 'category2', slug: 'category2' },
    { name: 'category3', slug: 'category3' },
    { name: 'category4', slug: 'category4' },
    { name: 'category5', slug: 'category5' },
    { name: 'category6', slug: 'category6' },
  ];

constructor() { }

}
