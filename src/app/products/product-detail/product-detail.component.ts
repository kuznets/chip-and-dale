import { Component, OnInit } from '@angular/core';
import {Product} from "../product.interface";
import {products} from "../products.enum";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productList: Product[] = products;
  public product: Product;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.product = this.productList.filter(item => item.slug === params.slug)[0];
    });
  }

}
