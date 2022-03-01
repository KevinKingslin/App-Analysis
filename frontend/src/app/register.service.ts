import { Injectable } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { json } from 'body-parser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private HttpClient: HttpClient, private router: Router) { }

  PostRegisterData(username: string, email: string, password: string){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    this.HttpClient.post('http://localhost:8000/register', { username, email, password }, {
      headers: headers
    }).subscribe((res) => {
      this.router.navigate(['/index'])
    },
    (err) => {
      console.log(err)
    })
  }
}
