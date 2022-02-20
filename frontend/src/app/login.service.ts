import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { json } from 'body-parser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  PostLoginData(username: string, password: string){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    const LoginInfo = {"username": username, "password": password}
    this.HttpClient.post('http://localhost:8000/api/login', LoginInfo, {
      headers: headers
    }).subscribe(data => {
      console.log(data)
    })
  }
}
