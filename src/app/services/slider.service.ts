import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  
  slides:any={
    bck:["white","white","white"],
    vise:"saznaj vise...",
    item:["../../../assets/lap3.jpg","../../../assets/mobile3.jpg","../../../assets/tv3.jpg"],
    name:["SAMSUNG","SAMSUNG S10","VOX"]
  }
  constructor() { }


  getSlides(){
    return this.slides;
  }
}
