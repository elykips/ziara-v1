import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOperatorsRoutingModule } from '../tour-operators/tour-operators-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { CreateProfileWizardComponent } from './create-profile-wizard/create-profile-wizard.component';

@NgModule({
  imports: [
    CommonModule,
      TourOperatorsRoutingModule,
      FormsModule,
      SharedModule
  ],
  declarations: [ 
    BusinessProfileComponent,
    CreateProfileWizardComponent
   ]
})


export class TourOperatorsModule { }
