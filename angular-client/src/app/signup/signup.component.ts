import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: Http) {}
  API = 'http://localhost:3000';
  usernamebox: any;
  passwordbox: any;
  

  ngOnInit() {
  }

  signup()
  {
    console.log(this.usernamebox);
    console.log(this.passwordbox);
    var data = JSON.stringify({ username: this.usernamebox, password: this.passwordbox });
    console.log(data)

    // this.http.get(`${this.API}/users`)
    // .map(res => res.json())
    // .subscribe(users => {
    //   console.log(users)
      
    // })
 
    // this.http.post(`${this.API}/users`, data)
    //   .map(res => res.json())
    //   .subscribe(() => {
        
    //   })
  // this.http.post('http://localhost:3000/users', data)
  //     .subscribe(res => {
  //         console.log(data)
  //         }
  //     , err => {
       
  //     }
  //     );

  }

}
