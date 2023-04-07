import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { Driver } from 'src/app/models/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  lstDrivers:Driver[]=[];

  constructor(private driverservice:DriverService){}

  ngOnInit(): void {
      this.getDrivers();
  }

  getDrivers(){
    this.driverservice.getDrivers().subscribe(res =>{
      console.log(res);
      this.lstDrivers = res.data;
    },error =>{
      console.log(error);
    })
  }

  delDrive(id: any){

  }
}

