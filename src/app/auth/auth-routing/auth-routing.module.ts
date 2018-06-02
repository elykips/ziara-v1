import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

const routes: Routes = [
  {
    path: 'sign-up',
     component: SignupComponent,
    data: {
      title: 'Sign Up'
    }  
  },
  {
    path: 'sign-in',
     component: SignupComponent,
    data: {
      title: 'Sign In'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
