import { Injectable } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { json } from 'body-parser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private HttpClient: HttpClient) { }

  PostRegisterData(username: string, email: string, password: string){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.HttpClient.post('http://localhost:8000/api/register', { username, email, password }, {
      headers: headers
    }).subscribe(data => {
      console.log(data)
    })
  }
}
