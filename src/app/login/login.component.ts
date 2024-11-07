import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // For now, let's assume login is always successful
    this.message = `Login successful for ${this.username}`;

    // Redirect to Payment page after login
    setTimeout(() => {
      this.router.navigate(['/payment']); // Redirect to Payment page
    }, 2000); // Wait for 2 seconds to show the success message

    // Reset form fields
    this.username = '';
    this.password = '';
  }
}
