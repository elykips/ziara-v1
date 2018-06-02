import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileComponent } from 'app/tour-operators/business-profile/business-profile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     component: BusinessProfileComponent,
    data: {
      title: 'Business Profile'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourOperatorsRoutingModule { }
