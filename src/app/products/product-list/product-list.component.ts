import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../shared/services/products/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public limit: number;
  public pages: number;

  productList: any[];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.productList.subscribe(res => this.productList = res);
    this.limit = 10;
    this.pages = this.productList.length/this.limit;
  }

}
