import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from './category.interface';
import { CatalogService } from './catalog.service';
import 'rxjs/add/operator/do';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public categoryList: Category[] = [];
  public categories_selector = new FormControl();

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.sub = this.catalogService.getCategories()
      .do((categories: any) => {
        this.categoryList = categories;
      })
      .subscribe();

    this.catalogService.getCategories();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
