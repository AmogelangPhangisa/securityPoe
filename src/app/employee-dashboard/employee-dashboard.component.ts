import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent {
  // Empty array initially, placeholder for future transaction data
  payments: any[] = [];

  constructor(private router: Router) {}

  // Logout function to go back to the login screen
  logout() {
    this.router.navigate(['/customer-login']); // Redirect to Admin Login
  }
}
