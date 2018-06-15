import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


import { AngularFireAuth } from 'angularfire2/auth';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class AuthService {

  googleUser;
  isLoggedIn: boolean = false;

  constructor(  
    private router: Router,
    private afAuth: AngularFireAuth, 
    private db: AngularFireDatabase) { 
  }


  logInWithGoogle(){
    this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider())
    return this.router.navigate['/dashboard/tour-operator'];

  }

  logInWithCredentials(credentials){
    this.db.list('/clients').push(credentials);
    return this.router.navigate['/dashboard/tour-operator'];
  }

  registerWithGoogle(){
    this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider())
    this.router.navigate['/dashboard/tour-operator']
   }

  register(credentials){
    return this.db.list('/clients').push(credentials);
  }


  checkAuthState(){
    return this.afAuth.authState
  }

  logoutFromGoogle(){
    return this.afAuth.auth.signOut()
    

  }
  
}
