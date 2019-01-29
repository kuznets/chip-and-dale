import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../category.interface';
import { CatalogService } from '../catalog.service';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public categoryList: Category[] = [];

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.sub = this.catalogService.getCategories()
      .do((categories: any) => {
        this.categoryList = categories;
      })
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
