import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../student'
import { StudentService } from '../../student.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model = new Student()
  user: any
  pass: any
  returnURL:string=""
  loginsuccess:string=""

  constructor(private service: StudentService,private router:Router) { }

  studentlist: Student[];

  ngOnInit(): void {

    this.returnURL="/product"

    this.service.readStudent().subscribe(data => {
      console.log("Data Received.........", data)
      this.studentlist = data.map((doc) => {
        return {
          did: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Student
      })
    })


  }


  save() {
    this.user = this.model.name
    this.pass = this.model.password


    for (let i = 0; i < this.studentlist.length; i++) {
      if (this.user == this.studentlist[i].name && this.pass == this.studentlist[i].password) {
        console.log("Login Success")

        this.loginsuccess="true"
        
        localStorage.setItem("isLoggedIn","true")
        localStorage.setItem("username",this.model.name)
        this.router.navigate([this.returnURL])
      }
      else{
        this.loginsuccess="false"
      }
    }
    if(this.loginsuccess=="false"){
      alert("Login Failed")
    }




  }

}
