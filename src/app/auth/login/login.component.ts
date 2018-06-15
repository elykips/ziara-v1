import { Component, ViewChild } from '@angular/core';
import 'rxjs/add/operator/map'; 

import * as firebase from 'firebase';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  route: any;
  @ViewChild('f') loginForm: NgForm;

  constructor( private authService: AuthService, private router: Router ) {
   
   }

    // On submit button click    
  onSignInWithCredentials(credentials) {
      this.loginForm.reset();
  }
  // On Forgot password link click
  onForgotPassword() {
      this.router.navigate(['forgotpassword']);
  }
  // On registration link click
  onDontHaveAccount() {
      this.router.navigate(['/signup']);
  }

  onSignInWithGoogle(){
    this.authService.logInWithGoogle();
    this.router.navigate(['/dashboard/tour-operator']);
  }

  onLogOut(){
    this.authService.logoutFromGoogle()
  }

  

}

