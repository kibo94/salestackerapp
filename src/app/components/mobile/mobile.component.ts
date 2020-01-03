import { Component, OnInit } from '@angular/core';
import { MobileService } from "../../services/mobile.service"
import { CartService } from "../../services/cart.service"
import axios from "axios"


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  items:any;
show:boolean
loading:boolean=true
  constructor(
public mobileService:MobileService,
public cartService:CartService


  ) { }

 
  ngOnInit() {
      // get all items
 
      axios.get("https://angular-e-commerce-c5cf8.firebaseio.com/mobiles.json")
      .then(data=> {
        this.items=data.data
     this.loading=false
     
  
      })



// Show modal when user add item..

this.cartService.Modal.subscribe(modal=>{
  this.show=modal
})
  }




// Add items to cart..

  addToCart(item){
  
    this.cartService.addToCart(item)

    
  
      // Show modal 

    this.cartService.openModal()
    
 

   }


    //  Show details of item
    
 Details(item){
    this.cartService.Details(item)
    this.mobileService.getMob()
  
    
    
 
  
  }
 

}
