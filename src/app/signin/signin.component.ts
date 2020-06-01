import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {AuthService} from '../auth.service';
import { logging } from 'protractor';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  message: string="";
  usererror: any;

  constructor(public fb: FormBuilder, public authServices: AuthService, public router:Router) { 
    this.myForm= this.fb.group({
      email: ['',[Validators.email, Validators.required]],
      password:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onsubmit(form){
    this.authServices.signin(form.value.email, form.value.password)
    .then((data) =>{
      console.log(data);
      this.message= "You have been signed in successfully."
    }).catch((error) => {
      console.log(error);
    })
  }

}
