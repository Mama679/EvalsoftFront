import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenizekey = req.clone({
      setHeaders:{
        Authorization:`bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(tokenizekey);    
  } 
}
