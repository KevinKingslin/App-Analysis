import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required])
  
  hide = true
  
  constructor(private LoginService: LoginService) {
  }

  getErrorMessage(object: FormControl) {
    if (object.hasError('required')) {
      return 'You must enter a value';
    }

    else
      return ''
  }

  onSubmit(): void{
    this.LoginService.PostLoginData(this.username.value, this.password.value)
  }
}
