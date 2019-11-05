import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeItemsComponent } from './components/home-items/home-items.component';
import { HeaderComponent } from './components/header/header.component';
import { TvComponent } from './components/tv/tv.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
const appRoutes: Routes = [{
  
  path:"televizori" ,component:TvComponent
},
{path:"",component:HomeComponent},
{
path:"mobilni",component:MobileComponent
},
{
path:"laptopovi",component:LaptopComponent,


},
{
  path:"item/:name/:id/:rand",component:ItemComponent,
},{
path:"cart",component:CartComponent,


},

]
@NgModule({
  declarations: [
    AppComponent,

    NavComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    HomeItemsComponent,
    HeaderComponent,
    TvComponent,
    MobileComponent,
    LaptopComponent,
    ItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
