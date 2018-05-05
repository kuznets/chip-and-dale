import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Product } from "../products.interface";
import { CatalogService } from "../catalog.service";
import { Subscription } from "rxjs/Subscription";
import { Category } from "../category.interface";
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public product: Product;

  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params: any) => {
      this.catalogService.getProductList()
        .filter(item => item.slug === params.slug)
        .subscribe((product: Product) => {
          this.product = product;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
