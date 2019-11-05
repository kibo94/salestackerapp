import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  colors:any=["#330000","#800000","#ff0000","#5900b3","#2e2eb8","#7070db","#0000ff","#33ccff","#009900","#ffff00"]

  constructor() { }



  getColors(){
    return this.colors
  }
}
