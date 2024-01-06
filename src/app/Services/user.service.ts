import { Injectable } from '@angular/core';
import { Users } from '../../data/users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLoggedInSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
  }

  login(email: string, password: string) {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].email === email && Users[i].password === password) {
        const loggedInUser = { email: email, name: Users[i].name };
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        console.log(localStorage.getItem("loggedInUser"));
        this.isLoggedInSubject.next(true);
        return true;
      }
    }
    return false;
  }
  logout() {
    localStorage.removeItem("loggedInUser")
    this.isLoggedInSubject.next(false);

  }
  isLogged(): boolean {
    return localStorage.getItem("loggedInUser") ? true:false

  }

  register(email: string, password: string, name: string) {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].email === email) {
        return false;
      }
    }
    Users.push({ email: email, password: password, name: name });
    return true;
  }
  validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);
  }

  validatePassword(password: string) {
    if (password.length >= 6) {
      return (true);
    }
    alert("Password must be at least 6 characters long!");
    return (false);
  }
  validateName(name: string) {
    if (name != "" || name != undefined || name != null) {
      return (true);
    }
    alert("You have entered an invalid name!");
    return (false);
  }


}
