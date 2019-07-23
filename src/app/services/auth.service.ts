import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = false;
  constructor() {}

  logIn(email) {
    this.isLoggedin = true;
    localStorage.setItem('email', email);
  }
  logOut() {
    this.isLoggedin = false;
    localStorage.clear();
  }
}
