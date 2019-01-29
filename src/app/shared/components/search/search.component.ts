import { Product } from './../../../catalog/products.interface';
import { CatalogService } from './../../../catalog/catalog.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/operator/do';
import 'rxjs/operator/filter';
import 'rxjs/add/operator/debounceTime';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  public searchData: FormControl = new FormControl();

  private subs: Subscription[] = [];
  public productsList: Product[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.subs.push(
      this.catalogService.getProductList() // TODO Change search logic
        .do((products: any) => {
          this.productsList = products;
        })
        .subscribe(),

      this.searchData.valueChanges
        .debounceTime(300)
        .subscribe(value => {
          this.productsList = this.productsList
            .filter((el: any) => {
              return el.title.toLowerCase().indexOf(value) !== -1;
            });
        }),
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
