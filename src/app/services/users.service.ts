import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(@Inject('API_URL') private apiUrl, private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    let options = {};
    // let headers = new HttpHeaders();
    // options['headers'] = new HttpHeaders().set('x-access-token', localStorage.getItem('jwt_token'));
    return this.httpClient.get<User[]>(`${this.apiUrl}/api/users`, options);
  }
}
