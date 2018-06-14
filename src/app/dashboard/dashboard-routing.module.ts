import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TourOperatorDashboardComponent } from './tour-operator-dashboard/tour-operator-dashboard.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: DashboardComponent,
        data: {
          title: 'Ziara Admin'
        }
      },
      {
        path: 'tour-operator',
        component: TourOperatorDashboardComponent,
        data: {
          title: 'Tour Operator'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    ChartsModule
  ],
})


export class DashboardRoutingModule { }
