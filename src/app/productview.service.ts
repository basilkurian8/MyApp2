import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductviewService {

  mycart:any=[]

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("http://localhost:4200/assets/product.json")
  }
}
