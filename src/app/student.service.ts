import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private obj:AngularFirestore) { }


  saveStudent(student){
    console.log("inside service",student)
    this.obj.collection("registrationdata").add({...student})
  }

  readStudent(){
    console.log(this.obj.collection("registrationdata").snapshotChanges())
    return this.obj.collection("registrationdata").snapshotChanges()
    
    
  }

}
