import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject"
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Laptop{

speclap:any[]=["Ekran","Procesor","Graficka Karta","HDD","USB 3.1","Boja","Bluetooth"]
items:any
private lapItem = new BehaviorSubject(this.speclap);
lap = this.lapItem.asObservable();



  constructor() { }




getLap(){
this.lapItem.next(this.speclap)
}


getRout(){
 for(var i=0;i<this.items.length;i++){
  return this.items[i].rout;
 }
}





    }
