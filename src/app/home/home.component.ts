import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private auth:AuthService) {}

  ngOnInit() {}

  login() {
    this.auth.logIn(this.user.email)
    this.router.navigate(['/about']);
  }
}
