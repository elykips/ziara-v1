import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { MyTourDetailsComponent } from './my-tour-details/my-tour-details.component';
import { MyToursComponent } from './my-tours/my-tours.component';
import { TourFormComponent } from './tour-form/tour-form.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [
    MyTourDetailsComponent,
    MyToursComponent,
    TourFormComponent
  ]
})
export class InventoryModule { }
