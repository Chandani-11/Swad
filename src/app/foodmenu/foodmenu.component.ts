import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators, ControlValueAccessor} from '@angular/forms';
import { logging, error } from 'protractor';
import { format } from 'path';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  
  fname: string;
  user: any={};
  name:string;
  message: string="";
  price :any;
  quantity :any;
  cost:any;
  cost1:any;
  cost2:any;
  cost3:any;
  cost4:any;
  cost5:any;
  cost6:any;
  cost7:any;
  cost8:any;
  cost9:any;
  cost10:any;
  cost11:any;
  cost12:any;
  sizes=[{ title: "Full ", value: "Full"}, 
  { title: "Half", value: "Half" }] ;
  
  @Output('order') Order= new EventEmitter();
 
  
  constructor() { 
    
  }
  
   ngOnInit(): void {
  }
  
  order(value: any){
    window.alert(value+' '+ "Orderd Placed  Successfully. Go to MyOrders");
    firebase.firestore().settings({
      timestampsInSnapshots: true
    });
   firebase.firestore().collection("Orders").add({
      fname: value,
      quantity:this.quantity,
      sizes:this.sizes,
      cost:this.cost,
      owner: firebase.auth().currentUser.uid,
      created:firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) =>{
     console.log(data);
      this.Order.emit();
    }).catch((error) =>{
      console.log(error);
    })
  } 

  


  clear(){
    
    this.price = undefined;
    this.quantity = undefined;
    this.cost = undefined;
    
  }

  

 total1(){
 this.cost1=90*1*this.quantity;
  }
  total2(){
    this.cost2=150*1*this.quantity;
  }
total3(){
      this.cost3=100*1*this.quantity;
    }
total4(){
      this.cost4=60*1*this.quantity;
       }
total5(){
        this.cost5=250*1*this.quantity;
         }
total6(){
      this.cost6=150*1*this.quantity;
         }
total7(){
      this.cost7=150*1*this.quantity;
       }
total8(){
        this.cost8=250*1*this.quantity;
        }

total9(){
    this.cost9=100*1*this.quantity;
      }

total10(){
    this.cost10=85*1*this.quantity;
     }
total11(){
      this.cost11=120*1*this.quantity;
       }
total12(){
        this.cost12=200*1*this.quantity;
         }
             
        
                 
           
         
             
       
        

   
  }
  
 


