import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';
import { LocalStorageService } from '../../local-storage.service';


@Injectable()
export class AuthService {

  constructor(private httpService: HttpService, private lc: LocalStorageService) { }

  public signin(data: object) {
    this.httpService.postData('/api/signin', null, data).subscribe(
      res => {
        this.lc.setItem('user', res);
      },
      error => {
        console.log(error);
      }
    );
  }

  public signup(data: object) {
    this.httpService.postData('/api/signup', null, data).subscribe(
      res => {
        this.lc.setItem('user', res);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getUserInfo() {
    return this.lc.getItem('user');
  }

  public logout() {
    return this.lc.delItem('user');
  }

}
