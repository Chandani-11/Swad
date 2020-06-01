import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firestore';
import { PassThrough } from 'stream';
import { strict } from 'assert';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {

  user:any={};
  Orders: any[]=[];
  @Input('order') order: any;
  

  postOrder:any={};
 

  constructor( public activatedRoute: ActivatedRoute ) {
    let id=this.activatedRoute.snapshot.paramMap.get('id');
     console.log(id);
     this.getProfile(id);
     this.getUserOrders(id);

 }

 ngOnInit(): void {
   this.postOrder=this.order.data();
   this.user= firebase.auth().currentUser;
 }

 getProfile(id: string){

  firebase.firestore().collection("users").doc(id).get()
  .then((documentSnapshot) => {
    
   this.user=documentSnapshot.data();
   this.user.displayName= this.user.firstname+" "+this.user.lastname;
   this.user.id= documentSnapshot.id;
   console.log(this.user);

  }).catch((error) =>{
    console.log(error);
  })
 }

 getUserOrders(id: string){

  firebase.firestore().collection("Orders").
  where("owner","==", id).get().then((data) =>{
    this.Orders=data.docs;
  })

 }

 
 onDelete(){
   this.Orders= [];
   this.getUserOrders("id");
 }
  
 
}
