import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOperatorDashboardComponent } from './tour-operator-dashboard/tour-operator-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartjsComponent } from '../charts/chartjs/chartjs.component';
// import { ChartistComponent } from '../charts/chartist/chartist.component';
// import { ChartjsComponent } from '../charts/chartjs/chartjs.component';




@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    TourOperatorDashboardComponent,
    DashboardComponent,
    ChartjsComponent,
    // ChartistComponent
  ]
})
export class DashboardModule { }
