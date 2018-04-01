import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ProductsService {

  private products = new BehaviorSubject<Object[]>(
    [
      {name: 'product1', link: 'category/product1', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', link: 'category/product2', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', link: 'category/product3', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', link: 'category/product4', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', link: 'category/product5', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', link: 'category/product1', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', link: 'category/product2', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', link: 'category/product3', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', link: 'category/product4', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', link: 'category/product5', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', link: 'category/product1', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', link: 'category/product2', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', link: 'category/product3', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', link: 'category/product4', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', link: 'category/product5', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', link: 'category/product1', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', link: 'category/product2', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', link: 'category/product3', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', link: 'category/product4', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', link: 'category/product5', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', link: 'category/product1', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', link: 'category/product2', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', link: 'category/product3', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', link: 'category/product4', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', link: 'category/product5', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', link: 'category/product1', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900}
    ]
  );
  productList = this.products;

  constructor() { }

}
