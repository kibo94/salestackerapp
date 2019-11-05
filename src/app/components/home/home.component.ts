import { Component, OnInit ,ViewChild, AfterContentInit} from '@angular/core';
import { CartService } from "../../services/cart.service"
import { HomeItemsComponent} from "../home-items/home-items.component"
import {Router} from "@angular/router";
import axios from "axios"




@Component({
  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  items:any;
  show:boolean
  



constructor(public cartService:CartService,
  public router:Router,
  
  ) { }
ngOnInit() {
  

  axios.get("https://burger-builder-1232d.firebaseio.com/shopOrders.json")
  .then(data=>{
    let d=data.data
    let arr=[]
 for(let key in d){
   arr.push(d[key].items)
 
 

  
 }
this.items=arr[0]
 



 
  })

// Show modal when user add a item..

this.cartService.Modal.subscribe(modal=>{
  this.show=modal
})

}







}




