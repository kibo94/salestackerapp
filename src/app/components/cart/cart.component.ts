import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { CartService } from "../../services/cart.service"
import { TvService } from "../../services/tv.service"
import { Laptop } from "../../services/laptop.service"
import {ActivatedRoute} from "@angular/router"
import { MobileService } from "../../services/mobile.service"
import { BehaviorSubject, from } from 'rxjs';
import { Subject } from "rxjs/Subject"
import axios from "axios"


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  toTal:number=0;
  cartitem:any=[]

  number:number=0;


modal:boolean=false
  
  
  constructor(public cartService:CartService,
    public tvService:TvService,
    public lapService:Laptop,
    public mobileService:MobileService,
    public router:ActivatedRoute
    ) { 
  
  }
  

  
  ngOnInit() {

    this.totalFromAdd()
    
    this.totalFromDelete()

    this.number=this.cartitem.length 

    
  }

  deleteFromCart(item){
    this.cartService.del(item)


}
totalFromDelete(){
    this.cartService.totalCart.subscribe(data=> this.toTal=data)
   
  

    this.cartService.lenC.subscribe(len=>this.number=len)
      
}
totalFromAdd(){

    this.cartitem=this.cartService.cart;
    this.toTal=this.cartService.totalInCart;
}


finish(){
  
  // alert("Uspesno izvrsena kupovina,isnos za placanje je "+this.toTal+"dinara")
this.modal=true;
let customer={
  items:this.cartitem,

  customerInfo:{
   
    name:"Bojan Bogdanovic",
    email:"bojanb106@gmial.com",
    street:"ul 422 br 3"
  },
  price:{
    totalPrice:this.toTal+"din",
  }
 
  

}
axios.post("https://burger-builder-1232d.firebaseio.com/shopOrders.json",customer)
setTimeout(()=>{
  
  this.cartService.resetCart()
},0)
setTimeout(()=>{
  this.modal=false
  this.cartService.resetCart()
},3000)

  

}



}