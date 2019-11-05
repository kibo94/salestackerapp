import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service"
import { Laptop } from "../../services/laptop.service"
import {TvService  } from "../../services/tv.service"
import {MobileService } from "../../services/mobile.service"
import {Router} from "@angular/router"
import { BehaviorSubject } from 'rxjs';
import { Subject } from "rxjs/Subject"
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


cartitem:any[]=[]
item:any;
products:any[]=[]
vrednosti:any[]=[]
show:boolean=false

  


  constructor(public cartService:CartService,
    public lapService:Laptop,
    public tvService:TvService,
    public mobService:MobileService,

    
    public router:Router) {
    
    }
    ngOnInit() {

// Show modal when user add item..

this.cartService.Modal.subscribe(modal=>{
  this.show=modal
})



  // Items from Home service//


this.getDetails()





 
if(this.router.url.includes("laptop")){
 this.getLap()

}

if(this.router.url.includes("tv")){
  this.getTV()
 
 }

 if(this.router.url.includes("mobilni")){
  this.getMob()
  
  
 }
 if(this.router.url.includes("home-rand")){
this.getHomeAll()
}  

  }  
  
  // Add to cart from single item;
  
    singleItem(item){
  

      this.cartService.addToCart(item)
      this.cartService.openModal()
 
    
  
   }

  

// Get details for a single item 

getDetails(){
this.cartService.singleItem.subscribe(data=>{

this.item=data;
this.vrednosti=data.vrednosti
})

}
getTV(){
  this.tvService.tv.subscribe(data =>{
  

     this.products=data;
      

  })
}
getLap(){
  this.lapService.lap.subscribe(data =>{



     this.products=data;
      

  })
}
getMob(){
  this.mobService.mob.subscribe(data =>{
    

     this.products=data;
      

  })
}
  




  
getHomeAll(){
  this.cartService.homes.subscribe(data =>{
  this.vrednosti=data;
 

  
  })
}
       
    }
  



