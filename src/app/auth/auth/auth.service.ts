import { Injectable } from '@angular/core';
import * as firebase from 'firebase'


import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthService {
  googleUser;
  constructor( private afAuth: AngularFireAuth) { 
  }

  loginWithGoogle(){
   return this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider())

  }

  checkAuthState(){
    return this.afAuth.authState
  }

  logoutFromGoogle(){
    return this.afAuth.auth.signOut()
  }
  
}
