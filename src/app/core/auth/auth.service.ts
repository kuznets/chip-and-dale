import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalStorageService } from '../local-storage.service';


@Injectable()
export class AuthService {

  private apiURL = 'https://immense-brushlands-69752.herokuapp.com';
  //private apiURL = 'http://localhost:3000';

  constructor(private httpService: HttpService, private lc: LocalStorageService) { }

  public signin(data: object) {
    return this.httpService.postData(this.apiURL + '/api/token', data, {});
  }

  public signup(data: object) {
    return this.httpService.postData(this.apiURL + '/api/signup', data, {});
  }

  public getUserInfo() {
    return this.lc.getItem('user');
  }

  public logout() {
    return this.lc.delItem('user');
  }

}
