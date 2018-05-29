import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from '../products.interface';
import { CatalogService } from '../catalog.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { CartService } from '../../cart/cart.service';
///import { Cart } from '../../cart/cart.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  public productList: Product[] = [];

  public select_price: string;
  public select_sort: string;

  public prices: Array<object> = [
    {name: 'Price: Low to High', value: 1},
    {name: 'Price: High to Low', value: -1}
  ];

  public alphabets: Array<object> = [
    {name: 'a-z', value: 1},
    {name: 'z-a', value: -1}
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private catalogService: CatalogService,
    private cart: CartService,
    private router: Router
  ) {
    this.subs.push(
      this.router.events
        .filter(event => event instanceof NavigationStart)
        .subscribe(() => this.productList = [])
    );
  }

  ngOnInit() {
    this.subs.push(
      this.activatedRoute.params.subscribe((params: any) => {
        // Get products by category
        if (params.slug) {
          this.catalogService.getProductList() // TODO Use method getProductsByFilters
            .do((products: any) => {
              this.productList = products;
            })
            .subscribe();
        } else {
          this.catalogService.getProductList()
            .do((products: any) => {
              this.productList = products;
            })
            .subscribe();
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onSelectChanged(event): any {
    let val = event.value,
      name = event.source.ngControl.name;

    if(val != undefined) {
      if (name == 'price') {
        this.select_sort = undefined;
      } else {
        this.select_price = undefined;
      }

      let params: object = {
        sort: val,
        type: name
      };

      // console.log(params);
      this.catalogService.getProductsByFilters(params)
        .do((products: any) => {
          this.productList = products;
        })
        .subscribe();
    } else {
      this.catalogService.getProductList()
        .do((products: any) => {
          this.productList = products;
        })
        .subscribe();
    }
  }

  addItemToCard(data: object) {
    console.log(data);
    this.cart.addToCard(data);
  }

  delItemFromCard(data: object) {
    this.cart.addToCard(data);
  }
}

