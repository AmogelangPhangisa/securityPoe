import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent {
  username: string = '';
  accountNumber: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded credentials
  hardcodedUsername = 'Amogelang';
  hardcodedAccountNumber = '123456789';
  hardcodedPassword = 'Amogelang@123';

  constructor(private router: Router) {}

  // On login submission, validate user credentials
  onLogin() {
    if (
      this.username === this.hardcodedUsername &&
      this.accountNumber === this.hardcodedAccountNumber &&
      this.password === this.hardcodedPassword
    ) {
      // If login is successful, redirect to Customer Dashboard or Payment page
      this.router.navigate(['/payment']); // You can modify the redirection here
    } else {
      // Show error message if login fails
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
