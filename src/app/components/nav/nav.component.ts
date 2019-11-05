import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service"
import { TvService } from "../../services/tv.service"
import { Laptop } from "../../services/laptop.service"
import {Router} from "@angular/router"
import { MobileService } from "../../services/mobile.service"




@Component({
selector: 'app-nav',
templateUrl: './nav.component.html',
styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
toogle:boolean=true;
tooglemenu:boolean=true;
hideHome:boolean=true;
toTal:number=0;
cartitem:any=[]
number:number=0;




constructor(public cartService:CartService,
  public tvService:TvService,
  public lapService:Laptop,
  public mobileService:MobileService,

  public router:Router
  ) { 

}




  ngOnInit() {

     



 this.cartitem=this.cartService.cart;

 this.cartService.totalCart.subscribe(data=>{
 this.toTal=data;
 this.number=this.cartitem.length;
  
})



  }



  deleteFromCart(item){



 this.cartService.del(item)


  }


    hideCart(){
      let ul=document.getElementById("responsive-nav");
      ul.className="wid"
      this.tooglemenu=true;
    }

 
    toogleMenu(){
      this.tooglemenu=!this.tooglemenu;
    
      let ul=document.getElementById("responsive-nav");
  
     if(!this.tooglemenu){
   ul.className="animate-nav"
     }
  
     else{
      ul.className="animate-nav1"
     }

  
    }

    show(){
this.toogle=false;

    }
    hide(){
      this.toogle=true;
    }



  }
  
