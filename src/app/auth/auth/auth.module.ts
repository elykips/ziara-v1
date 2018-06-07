import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'app/auth/auth/auth-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { AuthComponent } from './auth.component';
// import { LoginComponent } from '../login/login.component';
// import { SignupComponent } from '../signup/signup.component';





@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthComponent,
    // LoginComponent,
    // SignupComponent
  ]
})
export class AuthModule { }
