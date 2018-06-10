import { Component } from '@angular/core';
import 'rxjs/add/operator/map'; 

import * as firebase from 'firebase';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private authService: AuthService ) {
   
   }

  login(){
    this.authService.loginWithGoogle()
  }


}
