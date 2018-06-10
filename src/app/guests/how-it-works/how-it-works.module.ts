import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksRoutingModule } from './how-it-works-routing.module';

import { HowItWorksComponent } from './how-it-works.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
  CommonModule,
    HowItWorksRoutingModule,
    SharedModule
  ],
  declarations: [
    HowItWorksComponent
  ]
})
export class HowItWorksModule { }
