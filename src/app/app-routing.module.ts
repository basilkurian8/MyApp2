import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './user/login/login.component';
import {RegistrationComponent} from './user/registration/registration.component'
import {ShowcartComponent} from './showcart/showcart.component'
import {AuthGuardService} from './auth-guard.service'

const routes: Routes = [

  {
    path: "product",
    component: HomeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "cart",
    component: ShowcartComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
