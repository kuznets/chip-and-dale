import { Component, OnInit } from '@angular/core';
import { Category } from '../category.interface';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html',
  styleUrls: ['category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[];

  constructor(private categoriesService: CategoriesService) {
    this.categoryList = this.categoriesService.categories;
  }

  ngOnInit() {}

}
