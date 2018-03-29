import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public limit: number;
  public pages: number;


  get productList(): Array<Object> {
    return this._productList;
  }

  private _productList: Array<Object> = [
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
  ];


  constructor() { }

  ngOnInit() {
    this.limit = 10;
    this.pages = this.productList.length/this.limit;
  }

}
