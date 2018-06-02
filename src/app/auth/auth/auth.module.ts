import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from 'app/auth/auth-routing/auth-routing.module';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
