import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOperatorDashboardComponent } from './tour-operator-dashboard/tour-operator-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    TourOperatorDashboardComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
