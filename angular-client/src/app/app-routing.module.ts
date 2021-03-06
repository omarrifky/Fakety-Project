import { NgModule } from '@angular/core';

import { RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {UserinfoComponent} from './userinfo/userinfo.component';
import {ReturantactionsComponent} from './returantactions/returantactions.component';

const appRoutes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userinfo',component:UserinfoComponent},
  {path:'resturantactions',component:ReturantactionsComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'**',redirectTo:'login', pathMatch:'full'},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
