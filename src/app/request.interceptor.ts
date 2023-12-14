import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('request intercept', request);
    if(request.method==='POST'){
      const newRequest=request.clone({headers:new HttpHeaders({token:'faj42309840923'})})
      return next.handle(newRequest);
    }
    return next.handle(request)
  }
}
