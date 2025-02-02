import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-booksignup',
  templateUrl: './booksignup.component.html',
  styleUrls: ['./booksignup.component.css'] 
})
export class BooksignupComponent {
  registrationForm: FormGroup; 
  passwordMatchValidator: any;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator 
    });
  }


  onSubmit() { 
    if (this.registrationForm.invalid) {
      return;
    }
    
    console.log('Registration successful!');
  }
}
