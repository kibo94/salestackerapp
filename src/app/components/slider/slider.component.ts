import { Component, OnInit } from '@angular/core';
import { SliderService } from "../../services/slider.service"
import {Router} from "@angular/router";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  first:string
  iter:number=0;
  slides:any[]
  loadingTimer:any;
  vise:string;
  img:any[]=[]
  name:any[]=[]


  constructor(public sliderService:SliderService,
    public router:Router,) 
    { }

  ngOnInit() {
  let slides=this.sliderService.getSlides()
  this.slides=slides;
  this.first=slides["bck"][0]
  this.vise=slides["vise"]
  this.img=slides["item"][0]
  this.name=slides["name"][0]
  console.log(this.name)

    this.animate()

  }

  next(){
  
   
  this.iter++;


 
  if(this.iter>this.slides["bck"].length-1){
    this.iter=0
  }
  this.first=this.slides["bck"][this.iter]
  this.img=this.slides["item"][this.iter]
  this.name=this.slides["name"][this.iter]
  let slider=document.getElementById("slider");
  slider.classList.add("animate")


setTimeout(function(){
slider.classList.remove("animate")
},700)
clearInterval(this.loadingTimer)
this.loadingTimer = setInterval(()=>{this.sliderChange();}, 4000);

  
}
  previus(){
   

    
    this.iter--;
    
   
          if(this.iter<0){
            this.iter=this.slides["bck"].length-1;
           }
              this.first=this.slides["bck"][this.iter]
              this.img=this.slides["item"][this.iter]
              this.name=this.slides["name"][this.iter]
              let slider=document.getElementById("slider");
              slider.classList.add("animate")

setTimeout(function(){
  slider.classList.remove("animate")
  },1100)
  
  clearInterval(this.loadingTimer)
  this.loadingTimer = setInterval(()=>{this.sliderChange();}, 4000);

    }



animate(){

this.loadingTimer = setInterval(()=>{this.sliderChange();}, 4000);
  
}

sliderChange(){
  if(this.router.url==="/"){
     this.iter++;


  if(this.iter>this.slides["bck"].length-1){
     this.iter=0
  }
          this.first=this.slides["bck"][this.iter]
          this.img=this.slides["item"][this.iter]
          this.name=this.slides["name"][this.iter]
          let slider=document.getElementById("slider");
          slider.classList.add("animate")
          slider.classList.remove("animate")
    
    }
    
}




setMyStyles() {
  let styles = {
    'background': this.first,
  
  };
  return styles;
}





}
