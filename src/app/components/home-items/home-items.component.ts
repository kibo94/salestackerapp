import { Component, OnInit ,Output,EventEmitter,OnChanges} from '@angular/core';
import { CartService } from "../../services/cart.service"
import {Router, NavigationExtras} from "@angular/router";
import axios from "axios"



@Component({
  
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.css']
})
export class HomeItemsComponent implements OnInit,OnChanges {

  toogle:boolean=true;
items:any;
toTal:number=0
item:any[]=[]
loading:boolean=true

toogleDeails:boolean=true;




constructor(public cartService:CartService,
  public rout:Router,
) { }
ngOnInit() {

  axios.get("https://burger-builder-1232d.firebaseio.com/home-items.json")
  .then(data=>{
  

  this.items=data.data
  this.loading=false





  } )
  // get all items

  // let data=this.cartService.getData()
  



// Get data from firebase

this.cartService.data.subscribe(data=>{

  this.items=data;
})

}


ngOnChanges(){
  console.log("changes")
}


// Add items to a Cart...

addToCart(item){
   this.cartService.addToCart(item)

   this.cartService.openModal()

   
 }

  
  Details(item){
 
    this.cartService.Details(item)
    this.cartService.getHomeVal(item)
    
 
  
  }





}




