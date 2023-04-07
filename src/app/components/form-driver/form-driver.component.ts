import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service'; 

@Component({
  selector: 'app-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css']
})
export class FormDriverComponent implements OnInit{

  DriverForm : FormGroup;
  titulo = "Add Driver";
  id: string | null;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private driveservice:DriverService,
   // private toast: ToastrService,
    private aRouter: ActivatedRoute ){
this.DriverForm = this.fb.group({
  last_Name:['',Validators.required],
  first_Name:['',Validators.required],
  ssn:['',Validators.required],
  doB:['',Validators.required],
  address:['',Validators.required],
  city:['',Validators.required],
  phone:['',Validators.required],
  zip:['',Validators.required],
  active:['',Validators.required]
});

this.id = this.aRouter.snapshot.paramMap.get('id');

}
ngOnInit(): void {
this.isEdit();
}

addDriver(){

 
  let driver: Driver= {
    id : Number( this.id),
    last_Name: this.DriverForm.get('last_Name')?.value,
    first_Name: this.DriverForm.get('first_Name')?.value,
    ssn: this.DriverForm.get('ssn')?.value,
    doB: this.DriverForm.get('doB')?.value,
    city: this.DriverForm.get('city')?.value, 
    address: this.DriverForm.get('address')?.value,
    phone: this.DriverForm.get('phone')?.value,
    zip: this.DriverForm.get('zip')?.value,
    active: this.DriverForm.get('active')?.value
  }

  if(this.id !== null)
    {
      driver.id =Number(this.id);
      //Editar Driver
      this.driveservice.editDriver(driver).subscribe(data =>{
        //this.toast.info('Producto ha sido Actualizado','Producto');
        console.log(data);
        this.router.navigate(['/driver']);
      });
    }
    else{
      //Agregar Driver
      this.driveservice.addDriver(driver).subscribe(data =>{
        console.log(data);
        this.router.navigate(['/driver']);
      },error =>{
        console.log(error);
        
      });
    } 
    this.DriverForm.reset();  
}

isEdit(){
  if(this.id !== null){
    this.titulo = "Edit Driver";
    this.driveservice.getDriver(this.id).subscribe(res =>{
       console.log(res)
       this.DriverForm.setValue({
        last_Name:res.data.last_Name,
        first_Name:res.data.first_Name,
        ssn:res.data.ssn,
        doB:res.data.doB,
        address:res.data.address,
        city:res.data.city,
        phone:res.data.phone,
        zip:res.data.zip,
        active:res.data.active,
       });
       
    },error =>{
      console.log(error);
    });
  }
}

}