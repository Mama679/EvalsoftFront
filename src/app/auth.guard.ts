import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private autservice:AuthService,
              private router:Router){}

  canActivate():boolean {
    if(this.autservice.loggedin()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
