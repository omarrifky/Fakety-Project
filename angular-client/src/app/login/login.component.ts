import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  restMode:boolean =true;

  ngOnInit() {
  }

  gotoSignupPage()
  {
    window.location.replace("signup");
  }

  loginResturant()
  {
    window.location.replace("resturantactions");
  }
  loginUser()
  {
    window.location.replace("userinfo");
  }


}