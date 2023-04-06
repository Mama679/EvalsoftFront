import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = "https://localhost:7291/api/auth/login";

  constructor(private http:HttpClient, private router:Router) { }

  login(user:any):Observable<any>{
      return this.http.post(this.Url,user);
  }

  loggedin():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
   this.router.navigate(['/login']);
  }
}
