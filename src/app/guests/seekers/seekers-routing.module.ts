import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SeekersComponent } from './seekers.component';

const routes: Routes = [
  {
    path: '',
    component: SeekersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class SeekersRoutingModule { }
