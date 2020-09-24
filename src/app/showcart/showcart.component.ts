import { Component, OnInit } from '@angular/core';
import {ProductviewService} from '../productview.service'

@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {

  mycartitems:any=[]
  total=0
  popprod:any

  constructor(private service:ProductviewService) { }

  ngOnInit(): void {

    this.mycartitems=this.service.mycart
    this.mycartitems.forEach(service => {

      this.total+=service.price*service.quantity
      
    });



  }
  incQuantity(product){
    product.quantity+=1
    console.log("inc function call")


    this.mycartitems=this.service.mycart
    this.total=0
    this.mycartitems.forEach(service => {

      this.total+=service.price*service.quantity
      
    });



  }
  decQuantity(product){
    product.quantity-=1
    console.log("dec function call")


    this.mycartitems=this.service.mycart
    this.total=0
    this.mycartitems.forEach(service => {

      this.total=service.price*service.quantity-this.total
      
    });



  }
  delete(product){
    console.log("delete produt",product)
    this.popprod=this.service.mycart.indexOf(product)
    console.log("index",this.popprod)
    this.service.mycart.splice(this.popprod,1)
    console.log("delete function call",this.service.mycart)
    

    this.mycartitems=this.service.mycart
    this.total=0
    this.mycartitems.forEach(service => {

      this.total+=service.price*service.quantity
      
    });


  }

}
