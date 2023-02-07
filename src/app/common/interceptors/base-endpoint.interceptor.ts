import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { environment } from '../../../environments/environment';
  
  @Injectable()
  export class BaseEndpointInterceptor implements HttpInterceptor {
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(
        request.clone({
          url: environment.apiPath + request.url
        })
      );
    }
  }
  