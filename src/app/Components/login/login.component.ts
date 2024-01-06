import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  emailLabel: string = $localize`Email Address`;
  passwordLabel: string = $localize`Password`;
  registerLabel: string = $localize`Register`;
  loginLabel: string = $localize`Login`;
  
  email: string ="";
  password: string ="";
  loggedIn: boolean = false;
  constructor(private userService: UserService , private router:Router) { }

  ngOnInit() {


  }

  handleLogin()
  {
      if(!this.userService.validateEmail(this.email)) return false;
      if(!this.userService.validatePassword(this.password)) return false;

      this.loggedIn = this.userService.login(this.email, this.password);
      if(!this.loggedIn)
      {
        alert("Login failed. Please check your credentials and try again.");
        return false;
      } 
      this.router.navigate(['Home']);

      return true;
  }

  
 
}
