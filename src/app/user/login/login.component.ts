import { Component, OnInit } from '@angular/core';
import {Loginform} from '../../loginform'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model=new Loginform()

  constructor() { }

  ngOnInit(): void {
  }


  submit(){

  }

}
