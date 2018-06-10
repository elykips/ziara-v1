import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekersRoutingModule } from './seekers-routing.module';

import { SeekersComponent } from './seekers.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
  CommonModule,
    SeekersRoutingModule,
    SharedModule
  ],
  declarations: [
    SeekersComponent
  ]
})
export class SeekersModule { }
