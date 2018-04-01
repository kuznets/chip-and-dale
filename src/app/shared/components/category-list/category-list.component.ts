import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";

@Component({
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html',
  styleUrls: ['category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: any[];

  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit() {
    this._categoriesService.categoryList.subscribe(res => this.categoryList = res);
  }

}
