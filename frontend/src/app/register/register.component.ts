import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})

export class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  repassword = new FormControl('', [Validators.required, Validators.minLength(8)])
  
  hide = true
  
  constructor(private RegisterService: RegisterService) {
  }
  
  SamePassword() : void{
    if(this.password.value !== this.repassword.value){
      this.repassword.setErrors({notsame : true})
    }
  }

  getErrorMessage(object: FormControl) {
    if (object.hasError('required')) {
      return 'You must enter a value';
    }

    if (object.hasError('email'))
      return 'Not a valid email';
  
    if (object.hasError('minlength'))
      return 'Should have minimum 8 characters'

    if (object.hasError('notsame'))
      return 'Passwords are not same'

    else
      return ''
  }

  onSubmit(): void{
    this.RegisterService.PostRegisterData(this.username.value, this.email.value,this.password.value)
  }
}