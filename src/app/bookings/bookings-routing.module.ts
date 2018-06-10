import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'booking-details',
        component: BookingDetailsComponent,
        data: {
          title: 'Booking Details'
        }
      },
      {
        path: '',
        component: MyBookingsComponent,
        data: {
          title: 'Bookings'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class BookingsRoutingModule { }
