import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Products } from "../../../catalog/products.enum";
import { Product } from "../../../catalog/products.interface";
import "rxjs/operator/do";
import "rxjs/operator/filter";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchData: FormControl = new FormControl();

  prods: Product[] = Products;
  resultSearch: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.searchData.valueChanges
      .debounceTime(300)
      .do(() => this.resultSearch = this.prods)
      .subscribe(value   => {
        this.resultSearch = this.resultSearch
          .filter((el: any) => {
            return el.name.toLowerCase().indexOf(value) !== -1;
          });
      });
  }

}
