import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DriverComponent } from './components/driver/driver.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { RouterComponent } from './components/router/router.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { AuthService } from './services/auth.service';
import { FormDriverComponent } from './components/form-driver/form-driver.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PrincipalComponent,
    DriverComponent,
    VehiclesComponent,
    RouterComponent,
    ScheduleComponent,
    NotfoundComponent,
    FormDriverComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokeninterceptorService,
      multi:true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
