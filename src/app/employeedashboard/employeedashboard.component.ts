import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css'],
})
export class EmployeedashboardComponent {
  // Example of hardcoded transactions
  transactions = [
    {
      id: 'T001',
      customerName: 'Amogelang Phangisa',
      amount: 1000,
      from:123456789,
      to:987654321,
      currency: 'USD',
      status: 'Pending',
      swiftCode: 'SWIFT123',
      submittedToSWIFT: false,
    },
  ];

  constructor(private router: Router) {}

  // Logout method to redirect back to Employee Login
  logout() {
    this.router.navigate(['/employee-login']);
  }

  // Send to SWIFT method to handle button click
  sendToSWIFT(transaction: any) {
    if (transaction.swiftCode) {
      console.log(
        `Transaction ID: ${transaction.id} is being sent to SWIFT with SWIFT code: ${transaction.swiftCode}`
      );

      // Mark the transaction as submitted to SWIFT
      transaction.submittedToSWIFT = true;

      // Optionally, implement any other logic for backend integration or updates
    } else {
      alert(
        'Please enter a valid SWIFT code before sending the transaction to SWIFT.'
      );
    }
  }
}
