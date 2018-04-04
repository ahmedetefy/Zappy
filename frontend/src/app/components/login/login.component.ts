import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(): void {
  	this.auth.login(this.user)
    .then((user) => {
      localStorage.setItem('token', user.json().token);
      this.router.navigateByUrl('/tweet_list');
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
