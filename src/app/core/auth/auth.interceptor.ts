import { LocalStorageService } from './../local-storage.service';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private localStorageService: LocalStorageService,
        private httpClient: HttpClient
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const user: any = this.localStorageService.getItem('user');

        const clonedRequest = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });

        return next.handle(clonedRequest);
    }
}