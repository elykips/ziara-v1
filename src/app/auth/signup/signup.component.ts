import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  route: any;
  @ViewChild('f') loginForm: NgForm;
  
  constructor( 
    private authService: AuthService,
    private router: Router) {

     }

    // On submit button click    
    onSubmit(formObject) {
      this.authService.register(formObject)
      this.loginForm.reset();
      this.router.navigate(['login']);
    }

    // On Forgot password link click
    onForgotPassword() {
      this.router.navigate(['forgot-password']);
    }

    // On registration link click
    onAlreadyHaveAccount(){
        this.router.navigate(['login']);
    }

    onLoginWithGoogle(){
      this.authService.logInWithGoogle()
    }

}
