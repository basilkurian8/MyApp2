import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { StudentService } from '../../student.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  submitted = false
  nameexist = false
  studentlist: any[];

  constructor(private fb: FormBuilder, private service: StudentService) { }

  ngOnInit(): void {

    this.service.readStudent().subscribe(data => {
      console.log("Data Received.........", data)
      this.studentlist = data.map((doc) => {
        return {
          did: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as {}
      })
    })

  }

  storeForm = this.fb.group({

    name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]{2,30}$")]],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    password: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]{2,30}$")]],
    mobile: ['', [Validators.required, Validators.pattern("(0/91)?[7-9][0-9]{9}")]],
    dob: ['', [Validators.required, Validators.pattern("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])")]],

  })

  register() {
    this.submitted = true
    if (this.storeForm.invalid) {
      return
    }
    else {

      for (let i = 0; i < this.studentlist.length; i++) {
        console.log("name:", this.studentlist[i].name)
        console.log("name of form", this.storeForm.controls['name'].value)

        if (this.storeForm.controls['name'].value == this.studentlist[i].name) {
          this.nameexist = true
        }
        else { }
      }

      if (this.nameexist == true) {
        alert("Name already Exist")
       
      }
      else {
        this.service.saveStudent(this.storeForm.value)
        console.log(this.storeForm.value)
      }

    }

    this.submitted = false
    this.storeForm.reset()
    this.nameexist = false

  }
  reset() {
    this.submitted = false
    this.storeForm.reset()
  }

  get f() {
    console.log("inside getter", this.storeForm.controls)
    return this.storeForm.controls
  }


}
