import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject"
import { BehaviorSubject, from } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CartService {

modal:boolean=true
cart:any[]=[];
totalInCart:number=0;
lenCart:number;
item:any;
items:any


// Get single item(Details)
private singleItemSubj = new BehaviorSubject(this.item);

singleItem = this.singleItemSubj.asObservable();

// Get home items value

private homeItems = new BehaviorSubject(this.items)

homes = this.homeItems.asObservable();


// Modal subject
public Modal=new Subject <any>()
public Cart=new Subject <any>()

// Get total amount  from cart
public totalCart=new Subject <any>();

// Get a number of items in cart
public lenC=new Subject <any>();

public data=new Subject <any>();

  constructor() {
 
    this.Modal.next(this.modal)

   }


   addToCart(item){
    this.cart.push(item)
    
    let sum= this.cart.reduce(function (acc, obj) { return acc + obj.price; }, 0); // 7
    
  
    // Set totalinCart
    this.totalInCart=sum;
    
    // Send total price throw Subject
    
    this.totalCart.next(this.totalInCart)
      
      }


//Details (lead to specific item)

Details(item){
 
  this.singleItemSubj.next(item)
 
 
 }  
    


  //  Opem modal for a custom messages...
openModal(){

  this.modal=true

  this.Modal.next(this.modal)

  setTimeout(()=>{

        this.modal=false

        this.Modal.next(this.modal)

     },3000)
}
  



// Reset cart to 0 items
   resetCart(){
    this.cart.splice(0,this.cart.length)
    let sum= this.cart.reduce( (acc, obj) =>{ return acc + obj.price; }, 0); // 7

    this.totalInCart=sum;
    this.lenCart=this.cart.length
    
    this.totalCart.next(this.totalInCart)
    this.lenC.next(this.lenCart)
  }
//Get Items







// Get home items vrednosti for a single 

getHomeVal(item){

 this.homeItems.next(item.vrednosti)


}


//Delete item 


del(item){
  let updateCart=this.cart.filter(c=>c.name!==item.name)
   this.cart.splice(this.cart.indexOf(item),1)

   let sum= this.cart.reduce(function (acc, obj) { return acc + obj.price; }, 0); // 7
  
   this.totalInCart=sum;

   this.lenCart=this.cart.length
   this.totalCart.next(this.totalInCart)
   this.lenC.next(this.lenCart)
   

}




    }





    

  



