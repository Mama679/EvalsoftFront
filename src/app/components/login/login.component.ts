import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;
  user ={nomuser:'',password:''};

  constructor(
            private router:Router,
            private fb: FormBuilder, 
            private authService:AuthService,            
            private aRouter: ActivatedRoute){
    this.userForm = this.fb.group({
      usernom:['',Validators.required],
      password:['',Validators.required]
    });
  }
  ngOnInit(): void {
    
  }

  login(){
     this.user.nomuser =  this.userForm.get("usernom")?.value;
     this.user.password = this.userForm.get("password")?.value;

     this.authService.login(this.user).subscribe(res =>{
      console.log(res);
      if(res.exito == 1){
       
       localStorage.setItem("token", res.data.access_Token);
       this.router.navigate(['/']);
      }
      else{
        console.log("User/password incorrect.");
      }
     },error =>{
      console.log(error);
      this.userForm.reset();
    });     
  }
}
