import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private httpCli: HttpClient) {}

  // get any data from current path
  public getData(path: string) {
    return this.httpCli.get(path);
  }

  // post to current pathAPI
  // options need if request post to unic params for search node in DB
  public postData(pathAPI: string, body: any | null, options: object) {
    return this.httpCli.post(pathAPI, body, options);
  }

  // put need to edit in DB by options params
  public putData(pathAPI: string, body: any | null, options: object) {
    return this.httpCli.put(pathAPI, body, options);
  }

  // delete node by options params
  public deleteData(pathAPI: string, options: object) {
    return this.httpCli.delete(pathAPI, options);
  }
}
