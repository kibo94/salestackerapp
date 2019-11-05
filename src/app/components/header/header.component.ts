import { Component, OnInit } from '@angular/core';
import { HeaderService }  from "../../services/header.service"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
colors:any;
  constructor(public headerservice:HeaderService ){ }

  ngOnInit() {
    this.colors=this.headerservice.getColors()
  }

}



