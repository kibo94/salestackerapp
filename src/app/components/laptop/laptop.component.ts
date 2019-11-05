import { Component, OnInit } from '@angular/core';
import { Laptop } from "../../services/laptop.service"
import { CartService } from "../../services/cart.service"
import axios from "axios"

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})


export class LaptopComponent implements OnInit {
  items:any;
  show:boolean
  loading:boolean=true

  constructor(public lapService:Laptop,
    
    public cartService:CartService
    ) { }

  ngOnInit() {
 

    axios.get("https://burger-builder-1232d.firebaseio.com/laptopovi.json")
    .then(data=> {
      this.items=data.data
      this.loading=false
      this.lapService.getLapVal(this.items)

    })

// Get value of modal visible(true or  false)

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

    
   this.lapService.getLap()

   this.lapService.getLapVal(item)
    
 
  
  }
   


}
