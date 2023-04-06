import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user ={
    nomuser: '', 
    password: ''
  };
  constructor(){

  }
  ngOnInit(): void {
    
  }

  login(){
    console.log(this.user);
  }
}
