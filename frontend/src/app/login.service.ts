import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

import { json } from 'body-parser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private HttpClient: HttpClient, private router: Router) { }

  PostLoginData(username: string, password: string){

    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

    this.HttpClient.post('http://localhost:8000/login', { username, password }, {
      headers: headers
    }).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/index'])
    },
    (err) => {
      console.log(err)
    })
  }
}
