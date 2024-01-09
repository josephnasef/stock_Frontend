import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));

  }
  lang:string = "";
  addAuthToken(request: HttpRequest<any>) {
    this.lang = localStorage.getItem('lang') || 'en';
    return request.clone({
        setHeaders: {
          "Accept-Language": `${this.lang}`
        }
    })
  }
}
