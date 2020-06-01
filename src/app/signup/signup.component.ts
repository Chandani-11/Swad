import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { logging } from 'protractor';
import {AuthService} from '../auth.service';
import { format } from 'path';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  message: string="";
  usererror:any;

  constructor( public fb: FormBuilder, public authService:AuthService) {
    this.myForm= this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmpassword:['',[Validators.required, Validators.minLength(8)]]
    },{
      validators:this.checkIfMatchingPasswords("password", "confirmpassword")
    })
   }
   checkIfMatchingPasswords(passwordKey: string, confirmpasswordKey: string){
        return (group:FormGroup)=> {
          let password= group.controls[passwordKey];
          let confirmpassword= group.controls[confirmpasswordKey];
          
           if(password.value==confirmpassword.value){
             return;
           } else{
             confirmpassword.setErrors({
               notEqualToPassword: true
             })
           }
        }   
      }
   onsubmit(myForm) {
     let email:string = myForm.value.email;
     let password:string = myForm.value.password;
     let firstname:string=myForm.value.firstname;
     let lastname:string=myForm.value.lastname;


      this.authService.signup(email, password, firstname, lastname).then((user:any) =>{
          
        firebase.firestore().collection("users").doc(user.uid)
        .set({
          firstname: myForm.value.firstname,
          lastname: myForm.value.lastname,
          email: myForm.value.email,
  
        }).then(() => {
          this.message= "You have been signed up successfully.Please login."
        })
        
     }). catch((error)=>{
        console.log(error);
        this.usererror= error;
        
     })
     
   }       
  ngOnInit() {
  }

}
