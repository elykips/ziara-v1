import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'app/auth/auth-routing/auth-routing.module';

import { SignupComponent } from 'app/auth/signup/signup.component';
import { SigninComponent } from '../signin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent
  ]
})
export class AuthModule { }
