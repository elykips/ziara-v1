import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { SignupComponent } from '../signup/signup.component';
// import { SigninComponent } from '../signin/signin.component';
import { AuthComponent } from '../auth/auth.component';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

const routes: Routes = [
  {
    path: '',
     component: AuthComponent,
    data: {
      title: 'auth'
    }  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class AuthRoutingModule { }
