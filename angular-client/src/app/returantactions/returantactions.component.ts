import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-returantactions',
  templateUrl: './returantactions.component.html',
  styleUrls: ['./returantactions.component.css']
})

export class ReturantactionsComponent implements OnInit {

  displayUser:boolean=true;
  currentusers: any = [];
  usertofindbox : any;
  constructor(private http: Http) {}
  API = 'http://localhost:3000';
  ngOnInit() {
  //this.getallusers();
  }
getallusers(){
  // this.http.get(`${this.API}/users`)
  // .map(res => res.json())
  // .subscribe(users => {
  //   this.currentusers = users;
  //   console.log(users)
  //   console.log(this.currentusers)
  // })
  
}

getclient(){
  // this.http.get(`${this.API}/userbyname/`+this.usertofindbox)
  // .map(res => res.json())
  // .subscribe(users => {
  //  console.log(users)
  // })
}
}
