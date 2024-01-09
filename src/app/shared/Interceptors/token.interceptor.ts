
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available

    // if (this.authService.isLoggedInMawhiba()) {
      if (request.url.indexOf("api") > 0) {
        request = request.clone({
          setHeaders: {
            'Authorization': localStorage.getItem('TM_') == null ? '' : localStorage.getItem('TM_')!.toString(),
            ContentType: 'application/json',
          }
        });
      }
    // }
    return next.handle(request);
  }
}
