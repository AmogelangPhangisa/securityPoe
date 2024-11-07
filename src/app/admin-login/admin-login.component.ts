import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  // Declare the username and password variables
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Error message for invalid credentials

  // Hardcoded credentials
  readonly adminUsername = 'Admin@bank.co.za';
  readonly adminPassword = 'Admin@123456789';

  // Inject Router for navigation
  constructor(private router: Router) {}

  // Submit handler for the login form
  onSubmit(): void {
    if (this.username === this.adminUsername && this.password === this.adminPassword) {
      // If credentials match, navigate to the employee registration page
      this.router.navigate(['/employee-registration']);
    } else {
      // If credentials are incorrect, show an error message
      this.errorMessage = 'Invalid username or password. Please try again.';
    }

    // Clear the form fields after submission
    this.username = '';
    this.password = '';
  }
}
