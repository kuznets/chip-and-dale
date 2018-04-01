import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CategoriesService {

  private categories = new BehaviorSubject<Object[]>(
    [
      {name: 'category1', link: 'category1'},
      {name: 'category2', link: 'category2'},
      {name: 'category3', link: 'category3'},
      {name: 'category4', link: 'category4'},
      {name: 'category5', link: 'category5'},
      {name: 'category6', link: 'category6'}
    ]
  );
  categoryList = this.categories;

  constructor() { }

}
