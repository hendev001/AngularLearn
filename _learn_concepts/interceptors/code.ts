// way to intercept and modify HTTP requests and 
// responses globally before they reach your app code.

// Component → Service → HttpClient → 🔀 Interceptor → Backend API
//                                       ↓
//                                  Response comes back



import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const clonedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer fake-token'
      }
    });

    return next.handle(clonedReq);
  }
}




/* 
Component
  ↓
Service (HttpClient)
  ↓
Auth Interceptor (adds token)
  ↓
Retry Interceptor (retries failures)
  ↓
Logging Interceptor (logs request)
  ↓
Backend API. 
*/