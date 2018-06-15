import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';


@NgModule({
  imports: [


  CommonModule,
  
    SignupRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
