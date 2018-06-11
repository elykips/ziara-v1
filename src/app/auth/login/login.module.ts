import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';



@NgModule({
  imports: [
  CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    
    
  ],
  declarations: [
    LoginComponent
    
  ]
})
export class LoginModule { }
