import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  constructor() { }

  private _products: Product[] = [
    {
      name: 'product1',
      slug: 'product1',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product2',
      slug: 'product2',
      description: 'jfgfgjkfg',
      img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product3',
      slug: 'product3',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product4',
      slug: 'product4',
      description: 'jfgfgjkfg',
      img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product5',
      slug: 'product5',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product1',
      slug: 'product6',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product2',
      slug: 'product7',
      description: 'jfgfgjkfg',
      img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product3',
      slug: 'product8',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product4',
      slug: 'product9',
      description: 'jfgfgjkfg',
      img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product5',
      slug: 'product10',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product6',
      slug: 'product11',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product7',
      slug: 'product12',
      description: 'jfgfgjkfg',
      img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product8',
      slug: 'product13',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product9',
      slug: 'product14',
      description: 'jfgfgjkfg',
      img: 'https://interior-stickers.ru/57601-thickbox_default/chip-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
    {
      name: 'product10',
      slug: 'product15',
      description: 'jfgfgjkfg',
      img: 'https://bumper-stickers.ru/57602-large_default/deyl-iz-multfilma-chip-i-deyl-speshat-na-pomoshh.jpg',
      category: 'category 2',
      price: 900
    },
  ];
}
