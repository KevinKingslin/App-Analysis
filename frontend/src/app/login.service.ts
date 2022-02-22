import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { json } from 'body-parser';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  PostLoginData(username: string, password: string){
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.HttpClient.post('http://localhost:8000/api/login', { username, password }, {
      headers: headers
    }).subscribe(data => {
      console.log(data)
    })
  }
}
