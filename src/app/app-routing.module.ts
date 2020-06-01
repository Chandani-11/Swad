import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { OrderingComponent } from './ordering/ordering.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';




const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch:'full' 

},{
  path: 'signin', component:SigninComponent
},{
  path:'home', component:HomeComponent
},{
  path:'signup', component:SignupComponent  
},{
  path:'ordering/:id', component:OrderingComponent
},{
  path:'foodmenu', component:FoodmenuComponent  
},{  
   path: '**', redirectTo: 'home'
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
