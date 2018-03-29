import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  get categoryList(): Array<Object> {
    return this._categoryList;
  }

  private _categoryList: Array<Object> = [
    {name: 'category1', link: 'category1'},
    {name: 'category2', link: 'category2'},
    {name: 'category3', link: 'category3'},
    {name: 'category4', link: 'category4'},
    {name: 'category5', link: 'category5'},
    {name: 'category6', link: 'category6'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
