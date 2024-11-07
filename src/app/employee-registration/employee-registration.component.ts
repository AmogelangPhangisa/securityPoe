import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css'],
})
export class EmployeeRegistrationComponent {
  // Declare employee details variables as strings
  firstname: string = '';
  lastname: string = '';
  idNumber: string = '';
  employeeNumber: string = '';
  contactDetails: string = '';
  email: string = '';

  // Pre-set username and password for the employee under the hood
  username: string = 'employee'; // Generating a random username for the employee
  password: string = 'Employee@123'; // Hardcoding the password

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  // Submit handler for employee registration
  onSubmit(): void {
    if (this.validateForm()) {
      // Simulate successful registration
      this.successMessage = 'Employee registered successfully!';
      this.errorMessage = ''; // Reset error message

      // After 2 seconds, redirect to the employee login page
      setTimeout(() => {
        this.router.navigate(['/employee-login']); // Redirect to login page
      }, 2000);

      // Clear the form fields
      this.clearForm();
    } else {
      this.successMessage = ''; // Reset success message
      this.errorMessage = 'Please fill all fields correctly.';
    }
  }

  // Basic form validation function
  validateForm(): boolean {
    // Check that all fields are non-empty (non-falsy)
    return (
      Boolean(this.firstname) &&
      Boolean(this.lastname) &&
      Boolean(this.idNumber) &&
      Boolean(this.employeeNumber) &&
      Boolean(this.contactDetails) &&
      Boolean(this.email)
    );
  }

  // Reset form fields
  clearForm(): void {
    this.firstname = '';
    this.lastname = '';
    this.idNumber = '';
    this.employeeNumber = '';
    this.contactDetails = '';
    this.email = '';
  }
}
