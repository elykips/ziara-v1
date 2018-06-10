import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';

import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

@NgModule({
  imports: [
    CommonModule,
    BookingsRoutingModule
  ],
  declarations: [
    MyBookingsComponent,
    BookingDetailsComponent
  ]
})
export class BookingsModule { }
