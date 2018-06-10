import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';

import { SignupComponent } from './signup.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [


  CommonModule,
    SignupRoutingModule,
    SharedModule
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
