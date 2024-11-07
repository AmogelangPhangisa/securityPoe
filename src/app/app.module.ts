import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule here
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { EmployeLoginComponent } from './employe-login/employe-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PaymentComponent,
    AdminLoginComponent,
    EmployeeRegistrationComponent,
    EmployeeDashboardComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    EmployeLoginComponent,
    EmployeeLoginComponent,
    EmployeedashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
