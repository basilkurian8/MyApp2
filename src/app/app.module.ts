import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {UserModule} from './user/user.module';
import { ShowcartComponent } from './showcart/showcart.component'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
