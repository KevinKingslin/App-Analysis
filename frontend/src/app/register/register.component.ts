import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  repassword = new FormControl('', [Validators.required, Validators.minLength(8)])
  
  hide = true
  
  getErrorMessage(object: FormControl) {
    if (object.hasError('required')) {
      return 'You must enter a value';
    }

    if (object.hasError('email'))
      return 'Not a valid email';
  
    if (object.hasError('minlength'))
      return 'Should have minimum 8 characters'

    else
      return ''
  }

}