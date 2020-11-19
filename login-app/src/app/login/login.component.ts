import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = new LoginModel;
  roles : string[];
  flag : boolean;

  constructor() {
    this.roles = ["Admin","Guest","User"];
  }

  loggedIn() {
    this.flag = true;
  }
}
