import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderingComponent } from './ordering/ordering.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { CartComponent } from './cart/cart.component';


 

let firebaseConfig = {
  apiKey: "AIzaSyCT5Fh-5qHENYEwo-64DtU2vKkC_K9uTo8",
  authDomain: "swad-2dd9a.firebaseapp.com",
  databaseURL: "https://swad-2dd9a.firebaseio.com",
  projectId: "swad-2dd9a",
  storageBucket: "swad-2dd9a.appspot.com",
  messagingSenderId: "316053768343",
  appId: "1:316053768343:web:87021bbb2b810a561e01d2",
  measurementId: "G-JS69F1CHZJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    OrderingComponent,
    FoodmenuComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
