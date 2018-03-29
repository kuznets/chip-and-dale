import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss']
})
export class ProductsFiltersComponent implements OnInit {
  get alphabets(): Array<Object> {
    return this._alphabets;
  }

  get categoryList(): Array<Object> {
    return this._categoryList;
  }

  get prices(): Array<Object> {
    return this._prices;
  }

  private _categoryList: Array<Object> = [
    {name: 'category1', link: 'category1'},
    {name: 'category2', link: 'category2'},
    {name: 'category3', link: 'category3'},
    {name: 'category4', link: 'category4'},
    {name: 'category5', link: 'category5'},
    {name: 'category6', link: 'category6'}
  ];

  private _prices: Array<Object> = [
    {name: 'category1', value: 'Price: Low to High'},
    {name: 'category2', value: 'Price: High to Low'},

  ];

  private _alphabets: Array<Object> = [
    {name: 'category1', value: 'a-z'},
    {name: 'category2', value: 'z-a'},
  ];

  categories = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
