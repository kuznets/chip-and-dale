import { Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from '../products.interface';
import { CatalogService } from "../catalog.service";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public productList: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService, private router: Router) {
    this.subs.push(
      this.router.events
        .filter(event => event instanceof NavigationStart)
        .subscribe(() => this.productList = [])
    );
  }

  ngOnInit() {
    this.subs.push(
      this.activatedRoute.params.subscribe((params: any) => {
        if (params.slug) {
          this.catalogService.getProductList()
            .filter(item => item.category_id === Number(params.slug))
            .do((products: Product) => {
              this.productList.push(products);
            })
            .subscribe();
        } else {
          this.catalogService.getProductList()
            .do((products) => {
              this.productList.push(products);
            })
            .subscribe();
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
