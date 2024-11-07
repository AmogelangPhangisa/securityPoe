import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  fullName: string = '';
  idNumber: string = '';
  accountNumber: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // On registration, log the customer data (or save to a mock array)
  onRegister() {
    // For now, just log the registration details (in a real app, you'd save this)
    console.log('Customer registered:', {
      fullName: this.fullName,
      idNumber: this.idNumber,
      accountNumber: this.accountNumber,
      password: this.password,
    });

    // After registration, route to the customer login page
    this.router.navigate(['/customer-login']);
  }
}
