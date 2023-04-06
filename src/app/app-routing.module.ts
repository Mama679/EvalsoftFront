import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes propios
import { DriverComponent } from './components/driver/driver.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { RouterComponent } from './components/router/router.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


const routes: Routes = [
  {path: 'home', component:PrincipalComponent},
  {path:'driver', component:DriverComponent},
  {path:'vehicle', component:VehiclesComponent},
  {path:'router', component:RouterComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
