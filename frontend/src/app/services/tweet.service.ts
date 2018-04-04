import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { TweetItem } from '../models/tweet-item';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TweetService {

   private BASE_URL: string = 'http://0.0.0.0:8000/api/feed';
   private headers: Headers = new Headers({'Content-Type': 'application/json'});
   constructor(private http: Http) {}

   getTweetList(token): Promise<any> {
     let url: string = `${this.BASE_URL}/tweets/`;
     let headers: Headers = new Headers({
	    'Content-Type': 'application/json',
	    Authorization: `JWT ${token}`
	  });
     return this.http.get(url, {headers: headers}).toPromise();
   }

}
