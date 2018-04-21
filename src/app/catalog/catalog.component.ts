import { Component, OnInit } from '@angular/core';
import { Category } from "./category.interface";
import { CatalogService } from "./catalog.service";
import 'rxjs/add/operator/do';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public categoryList: Category[] = [];
  public categories_selector = new FormControl();

  get alphabets(): Array<Object> {
    return this._alphabets;
  }

  get prices(): Array<Object> {
    return this._prices;
  }

  private _prices: Array<Object> = [
    {name: 'category1', value: 'Price: Low to High'},
    {name: 'category2', value: 'Price: High to Low'}
  ];

  private _alphabets: Array<Object> = [
    {name: 'category1', value: 'a-z'},
    {name: 'category2', value: 'z-a'}
  ];


  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.categories$
      .do((category: Category) => {
        this.categoryList.push(category);
      })
      .subscribe();

    this.catalogService.getCategories();
  }

}
