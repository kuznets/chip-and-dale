import { Component, OnInit } from '@angular/core';
import { Product } from './product.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

}
