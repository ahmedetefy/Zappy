import { Injectable, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://0.0.0.0:8000/api/jwt';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}

  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/token/`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

   logout(token): Promise<any> {
    let url: string = `${this.BASE_URL}/logout/`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    });
    return this.http.post(url, {}, {headers: headers}).toPromise();
   }

}
