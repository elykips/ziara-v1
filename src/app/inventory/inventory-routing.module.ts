import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MyTourDetailsComponent } from './my-tour-details/my-tour-details.component';
import { MyToursComponent } from './my-tours/my-tours.component';
import { TourFormComponent } from './tour-form/tour-form.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tour-details',
        component: MyTourDetailsComponent,
        data: {
          title: 'Tour Details'
        }
      },
      {
        path: 'my-tours',
        component: MyToursComponent,
        data: {
          title: 'My Tours'
        }
      },
      {
        path: 'new-tour',
        component: TourFormComponent,
        data: {
          title: 'New Tour'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class InventoryRoutingModule { }
