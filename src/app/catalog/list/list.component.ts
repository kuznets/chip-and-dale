import { Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from '../products.interface';
import { CatalogService } from "../catalog.service";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public productList: Product[] = [];
  //public product: Product;

  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params: any) => {
      if(params.slug) {
        this.catalogService.products$
          .filter(item => {
            item.category_id === params.slug
          })
          .do((products: Product) => {
            this.productList.push(products);
          })
          .subscribe();
      } else {
        this.catalogService.products$
          .do((products: Product) => {
            this.productList.push(products);
          })
          .subscribe();
      }
    });

    this.catalogService.getProductList();
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
}
