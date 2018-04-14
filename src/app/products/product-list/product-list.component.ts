import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import {products} from '../products.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public limit: number;
  public pages: number;
  public productList: Product[] = products;

  constructor() {}

  ngOnInit() {
    this.limit = 10;
    this.pages = this.productList.length / this.limit;
  }

}
