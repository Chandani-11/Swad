import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  signin(email:string, password:string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
       }
       signup(email:string, password:string, first_name:string, last_name:string){
        return new Promise((resolve, reject) =>{

             firebase.auth().createUserWithEmailAndPassword(email, password).then(
                (response)=>{

              response.user.updateProfile({
                  displayName: first_name+" "+last_name,
                  
                  }).then(() =>{
                     resolve(response.user);
                     }).catch((error) =>{
                          reject();
                       })
                     }).catch((error) =>{
                           reject();
                          })
        })
    }
}
