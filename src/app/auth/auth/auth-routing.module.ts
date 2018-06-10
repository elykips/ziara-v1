import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from '../auth/auth.component';
// import { LoginComponent } from '../login/login.component';
// import { SignupComponent } from '../signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
exports: [RouterModule],
})
export class AuthRoutingModule { }
