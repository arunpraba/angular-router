import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedin = localStorage.getItem('email') ? true :false
  constructor(public auth:AuthService) {}
  logOut() {
    this.auth.logOut()
  }
}
