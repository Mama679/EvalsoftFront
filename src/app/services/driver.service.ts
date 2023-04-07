import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private url = "https://localhost:7291/api/driver/";

  constructor(private http:HttpClient, 
              private router:Router) { }

  getDrivers(): Observable<any>{              
    return this.http.get(this.url + "GetAll");
  }

  getDriver(id : string): Observable<any>{
    return this.http.get(this.url + "GetById/"+id);
  }

  addDriver(driver: Driver): Observable<any>{
    return this.http.post(this.url +"Insert",driver);
  }

  editDriver(driver: Driver): Observable<any>{
    return this.http.put(this.url + "Update", driver);
  }

}
