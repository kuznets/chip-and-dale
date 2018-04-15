import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  // constructor() { }

  // get item from localStorage by item name
  public getItem(name: string) {
    return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : null;
  }

  // set data to item in localStorage by item name
  public setItem(name: string, data: object) {
    return localStorage.setItem(name, JSON.stringify(data));
  }

  // remove item from localStorage by item name
  public delItem(name: string) {
    return localStorage.removeItem(name);
  }
}
