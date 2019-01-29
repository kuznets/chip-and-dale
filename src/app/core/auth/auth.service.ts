import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalStorageService } from '../local-storage.service';


@Injectable()
export class AuthService {

  constructor(private httpService: HttpService, private lc: LocalStorageService) { }

  public signin(data: object) {
    return this.httpService.postData('/api/token', data, null);
  }

  public signup(data: object) {
    return this.httpService.postData('/api/register',  data, null);
  }

  public getUserInfo() {
    return this.lc.getItem('user');
  }

  public logout() {
    return this.lc.delItem('user');
  }

}
