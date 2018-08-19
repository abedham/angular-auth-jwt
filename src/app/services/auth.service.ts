import { Injectable, Inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Login } from '../model/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(@Inject('API_URL') private apiUrl, private httpClient: HttpClient, private jwtHelper: JwtHelperService) { }

  tokenKey = 'jwt_token';
  login(login: Login): Observable<boolean> {
    return this.httpClient.post<any>(`${this.apiUrl}/api/auth/login`, {
      email: login.email,
      password: login.password
    }).pipe(map(response => {
      console.log(JSON.stringify(response))
      if (response.auth) {
        localStorage.setItem(this.tokenKey, response.token);
      }
      return response.auth;
    }), catchError(err => {
      console.log(err)
      return throwError(err);
    }));
  }

  register(login: Login): Observable<boolean> {
    return this.httpClient.post<any>(`${this.apiUrl}/api/auth/register`, {
      name: login.name,
      email: login.email,
      password: login.password
    }).pipe(map(response => {
      console.log(JSON.stringify(response))
      if (response.auth) {
        localStorage.setItem(this.tokenKey, response.token);
      }
      return response.auth;
    }), catchError(err => {
      console.log(err)
      return throwError(err);
    }));
  }

  isAuthenticated(): boolean {
    let token = this.getToken();
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true
    }
    return false;
  }
  logout(): any {
    localStorage.removeItem(this.tokenKey)
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
