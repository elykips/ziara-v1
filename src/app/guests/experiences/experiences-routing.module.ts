import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencesComponent } from './experiences.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ExperiencesRoutingModule { }
