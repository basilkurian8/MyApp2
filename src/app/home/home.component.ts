import { Component, OnInit } from '@angular/core';
import {ProductviewService} from '../productview.service'
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productlist:any;
  

  constructor(private service:ProductviewService,private service1:AuthService,private router:Router) { }

  username

  ngOnInit(): void {

    this.username=localStorage.getItem("username")

    this.service.getData().subscribe(list=>{
      this.productlist=list
      console.log(this.productlist)
      console.log(typeof(this.productlist))
    })
  }

  logout(){
    this.service1.logout()
    this.router.navigate(["/login"])
  }




  incQuantity(product){
    product.quantity+=1
    console.log("inc function call")
  }
  decQuantity(product){
    product.quantity-=1
    console.log("dec function call")
  }
  addtoCart(product){
    this.service.mycart.push(product)
    console.log("function call",this.service.mycart)


  }

}
