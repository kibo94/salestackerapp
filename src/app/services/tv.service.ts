import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject"
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  spectv:any[]=["Ekran","Dijagonala","Rezolucija","Android","Smart Tv","Boja","Godina Proizvodnje"]

x:any[]=[]

  items:any;
  private tvItem = new BehaviorSubject(this.spectv);
  tv = this.tvItem.asObservable();

  constructor() { }



      

getTV(){
this.tvItem.next(this.spectv)
}




 }



