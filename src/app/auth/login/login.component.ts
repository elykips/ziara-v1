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
  onSubmit() {
      this.loginForm.reset();
  }
  // On Forgot password link click
  onForgotPassword() {
      this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
      this.router.navigate(['register'], { relativeTo: this.route.parent });
  }

  login(){
    this.authService.loginWithGoogle()
  }

  

}

