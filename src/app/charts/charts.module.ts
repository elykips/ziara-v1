import {NgModule} from '@angular/core';               
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { ChartistComponent } from './chartist/chartist.component';

@NgModule({
imports: [
    ChartsModule,
    ChartistModule
],
declarations: [
    ChartjsComponent,
    ChartistComponent
],
providers: [ ],                       
})
export class ChartsNg2Module {

}