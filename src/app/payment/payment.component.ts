import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  amount: number | null = null;
  currency: string = 'USD';
  provider: string = 'SWIFT';
  recipientAccount: string = '';
  swiftCode: string = '';
  paymentStatus: string = '';

  constructor(private router: Router) {}

  // Handle form submission
  onSubmit() {
    // Simple validation to check if all fields are filled
    if (this.amount && this.recipientAccount && this.swiftCode) {
      // Simulate successful payment submission
      this.paymentStatus = `Payment of ${this.amount} ${this.currency} to account ${this.recipientAccount} with SWIFT code ${this.swiftCode} was successful!`;
      // Optionally, redirect to another page after successful payment
      // this.router.navigate(['/success-page']);
    } else {
      this.paymentStatus = 'Please fill in all the fields correctly.';
    }
  }

  // Handle logout and redirect to Employee Login page
  logout() {
    // Clear any session data (if any) - hardcoded for now
    // You could clear sessionStorage, localStorage, or any variables here
    console.log('Logging out...');

    // Redirect to Employee Login
    this.router.navigate(['/employe-login']); // Redirects to the Employee Login page
  }
}
