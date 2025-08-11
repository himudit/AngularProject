import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('')
  })
  onSubmit(): void {
    console.log('User Data:', this.userData.value);
    this.userData.reset();
  }
} 