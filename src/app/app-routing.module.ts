import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'; // Import Registration Component
import { LoginComponent } from './login/login.component'; // Import Login Component
import { PaymentComponent } from './payment/payment.component'; // Import Payment Component
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeLoginComponent } from './employe-login/employe-login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component'; // New import

// Define the routes for your application
const routes: Routes = [
  { path: '', redirectTo: '/admin-login', pathMatch: 'full' }, // Default route (redirect to registration page)
  { path: 'registration', component: RegistrationComponent }, // Registration route
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'payment', component: PaymentComponent }, // Payment route
  { path: 'admin-login', component: AdminLoginComponent }, // Login route
  { path: 'employee-registration', component: EmployeeRegistrationComponent },
  { path: 'employee-login', component: EmployeeLoginComponent },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent },
  { path: 'customer-register', component: CustomerRegisterComponent },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'employe-login', component: EmployeLoginComponent },
  { path: 'employeedashboard', component: EmployeedashboardComponent }, // New route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // Export the RouterModule to make the routes available to the rest of the app
})
export class AppRoutingModule {}
