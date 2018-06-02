import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileComponent } from 'app/tour-operators/business-profile/business-profile.component';
import { TourOperatorsRoutingModule } from 'app/tour-operators/tour-operators-routing/tour-operators-routing.module';

@NgModule({
  imports: [
      CommonModule,
      TourOperatorsRoutingModule
  ],
  // exports: [],
  declarations: [ 
    BusinessProfileComponent
   ],
  // providers: [],
})

export class TourOperatorsModule { }
