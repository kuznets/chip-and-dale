import { Component, OnInit } from '@angular/core';
import { Category } from "../category.interface";
import { CatalogService } from "../catalog.service";
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categoryList: Category[] = [];

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
    // this.catalogService.categories$
    //   .do((category: Category) => {
    //     this.categoryList.push(category);
    //   })
    //   .subscribe();
    // this.catalogService.categories;
  }

}
