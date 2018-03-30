import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CategoriesService} from "../../../shared/services/categories/categories.service";

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss']
})
export class ProductsFiltersComponent implements OnInit {

  categoryList: Array<Object>;

  get alphabets(): Array<Object> {
    return this._alphabets;
  }

  get prices(): Array<Object> {
    return this._prices;
  }

  private _prices: Array<Object> = [
    {name: 'category1', value: 'Price: Low to High'},
    {name: 'category2', value: 'Price: High to Low'},

  ];

  private _alphabets: Array<Object> = [
    {name: 'category1', value: 'a-z'},
    {name: 'category2', value: 'z-a'},
  ];

  categories = new FormControl();

  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit() {
    this._categoriesService.categoryList.subscribe(res => this.categoryList = res);
  }

}
