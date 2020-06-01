import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import 'firebase/firestore';
import 'firebase/firestore';
import { PassThrough } from 'stream';
import { strict } from 'assert';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input('order') Order: any;
  @Output('onDelete') onDelete = new EventEmitter();

  orderData: any = {};
  user: any = {};

  constructor() {}
    
    ngOnInit(): void {

    this.orderData = this.Order.data();
    this.user = firebase.auth().currentUser;
  }

  
  delete(){

    firebase.firestore().collection("Orders").doc(this.Order.id).delete().then(() => {
      this.onDelete.emit();
    });

  }

}
