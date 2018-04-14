import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productList: Product[];
  public product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) {
      this.productList = this.productsService.products;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.product = this.productList.filter(item => item.slug === params.slug)[0];
    });
  }

}
