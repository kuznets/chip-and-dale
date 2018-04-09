import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ProductsService {

  private products = new BehaviorSubject<Object[]>(
    [
      {name: 'product1', slug: 'product1', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', slug: 'product2', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', slug: 'product3', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', slug: 'product4', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', slug: 'product5', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', slug: 'product6', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', slug: 'product7', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', slug: 'product8', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', slug: 'product9', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', slug: 'product10', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', slug: 'product11', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', slug: 'product12', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', slug: 'product13', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', slug: 'product14', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', slug: 'product15', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', slug: 'product16', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', slug: 'product17', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', slug: 'product18', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', slug: 'product19', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', slug: 'product20', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', slug: 'product21', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product2', slug: 'product22', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product3', slug: 'product23', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product4', slug: 'product24', img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product5', slug: 'product25', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900},
      {name: 'product1', slug: 'product26', img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg', category: 'category 2', price: 900}
    ]
  );
  productList = this.products;

  constructor() { }

}
