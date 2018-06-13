import { LocalStorageService } from './../local-storage.service';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    user: any;

    constructor(
        private localStorageService: LocalStorageService,
        private httpClient: HttpClient
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.user = this.localStorageService.getItem('user');

        if (this.user) {
            console.log('USER EXIST ', this.user);

            const clonedRequest = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.user.token}`
                }
            });

            return next.handle(clonedRequest);
        }

        return next.handle(req);
    }
}
