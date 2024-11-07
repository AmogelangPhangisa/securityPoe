import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- Import the Router

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  // Declare form model variables
  fullName: string = '';
  idNumber: string = '';
  accountNumber: string = '';
  password: string = '';
  message: string = '';

  // Inject the Router service
  constructor(private router: Router) {}

  // Submit handler
  onSubmit(): void {
    // Registration logic (you can add additional logic here, like form validation)
    this.message = `Registration successful for ${this.fullName}`;

    // After registration success, redirect to the Login page
    setTimeout(() => {
      this.router.navigate(['/login']); // Navigate to the Login page
    }, 2000); // Wait for 2 seconds to show the success message before redirecting

    // Reset the form fields after submission
    this.fullName = '';
    this.idNumber = '';
    this.accountNumber = '';
    this.password = '';
  }
}
