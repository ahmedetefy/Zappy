import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';

import { TweetItem } from '../../models/tweet-item';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {
  tweetList: [TweetItem];

  constructor(private tweet: TweetService) { }

  ngOnInit() {
  	this.getTweetList()
  }

  getTweetList() {
    const token = localStorage.getItem('token');
    if (token) {
      this.tweet.getTweetList(token)
      .then((tickets) => {
        this.tweetList = tickets.json() as [TweetItem];
     })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
