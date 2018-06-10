import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HowItWorksComponent } from './how-it-works.component';


const routes: Routes = [
  {
    path: '',
    component: HowItWorksComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class HowItWorksRoutingModule { }
