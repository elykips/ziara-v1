import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersComponent } from './providers.component';

@NgModule({
  imports: [
CommonModule,
    ProvidersRoutingModule,
    SharedModule
  ],
  declarations: [
    ProvidersComponent
  ]
})
export class ProvidersModule { }
