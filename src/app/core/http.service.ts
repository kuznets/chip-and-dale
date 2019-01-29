import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  // private apiURL = 'https://immense-brushlands-69752.herokuapp.com';
  private apiURL = 'http://localhost:3000';

  constructor(private httpCli: HttpClient) {}

  // get any data from current path
  public getData(path: string, options?) {
    return this.httpCli.get(`${this.apiURL}${path}`, null || {params: options});
  }

  // post to current pathAPI
  // options need if request post to unic params for search node in DB
  public postData(path: string, body: any | null, options: object) {
    return this.httpCli.post(`${this.apiURL}${path}`, body, options);
  }

  // put need to edit in DB by options params
  public putData(path: string, body: any | null, options: object) {
    return this.httpCli.put(`${this.apiURL}${path}`, body, options);
  }

  // delete node by options params
  public deleteData(path: string, options: object) {
    return this.httpCli.delete(`${this.apiURL}${path}`, options);
  }
}
