import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestRoutingModule } from './guest-routing.module';

import { ExperiencesComponent } from './experiences/experiences.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ProvidersComponent } from './providers/providers.component';
import { SeekersComponent } from './seekers/seekers.component';


@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [
    ExperiencesComponent,
    HowItWorksComponent,
    ProvidersComponent,
    SeekersComponent
  ]
})
export class GuestsModule { }
