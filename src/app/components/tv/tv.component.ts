import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service"
import { TvService } from "../../services/tv.service"
import axios from "axios"

import {Router} from "@angular/router"



@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  items:any=[]
  spectv:any=[]
show:boolean
loading:boolean=true
  constructor(public tvService:TvService,
 
    public cartService:CartService,
    ) { }

  ngOnInit() {


    axios.get("https://burger-builder-1232d.firebaseio.com/tv.json")
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
  this.tvService.getTV()


}


}