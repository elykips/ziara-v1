import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesRoutingModule } from './experiences-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ExperiencesComponent } from './experiences.component';


@NgModule({
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    SharedModule
  ],
  declarations: [
    ExperiencesComponent
  ]
})
export class ExperiencesModule { }
