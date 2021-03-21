import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { map } from "rxjs/operators";
import {AppRoutingModule} from './/app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ReturantactionsComponent } from './returantactions/returantactions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserinfoComponent,
    ReturantactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    
    
  ],
  providers: [HttpModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
