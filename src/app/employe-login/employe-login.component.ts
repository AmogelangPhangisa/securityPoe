import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-login',
  templateUrl: './employe-login.component.html',
  styleUrls: ['./employe-login.component.css'],
})
export class EmployeLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded employee credentials
  correctUsername: string = 'employee1234'; // Example username
  correctPassword: string = 'Employee@123'; // Example password

  constructor(private router: Router) {}

  // Login function to validate credentials
  onLogin(): void {
    if (
      this.username === this.correctUsername &&
      this.password === this.correctPassword
    ) {
      this.errorMessage = ''; // Reset any previous error messages
      this.router.navigate(['/employeedashboard']); // Redirect to the dashboard if credentials are correct
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
