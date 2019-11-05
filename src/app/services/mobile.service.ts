import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject"
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MobileService {


specmob:any[]=["Dizajn","Tip ekrana","Ekran osetljiv na dodir","Dijagonala ekrana","Rezolucija","Procesor","Sistem"]
 
x:any[]=[]


items:any;

private mobItem = new BehaviorSubject(this.specmob);
    mob = this.mobItem.asObservable();


constructor() { }

getMob(){
  this.mobItem.next(this.specmob)
  }


    }

