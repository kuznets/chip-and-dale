import { Component, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Product } from '../products.interface';
import { CatalogService } from "../catalog.service";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, NavigationEnd, NavigationStart, RoutesRecognized, Router } from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/let';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public productList: Product[] = [];
  //public product: Product;

  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService, private router: Router) {
    this.subs[0] = this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(() => this.productList = []);
  }

  ngOnInit() {
    this.subs[1] = this.activatedRoute.params.subscribe((params: any) => {
      if(params.slug) {
        this.catalogService.products$
          .filter(item => item.category_id === Number(params.slug))
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

      this.catalogService.getProductList();
    });
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
