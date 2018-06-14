import { Component } from '@angular/core';
import * as chartsData from '../../shared/data/chartjs';

@Component({
    selector: 'app-chartjs',
    templateUrl: './chartjs.component.html'                         
})

export class ChartjsComponent {

    // lineChart
    public lineChartData = chartsData.lineChartData;
    public lineChartLabels = chartsData.lineChartLabels;
    public lineChartOptions = chartsData.lineChartOptions;
    public lineChartColors = chartsData.lineChartColors;
    public lineChartLegend = chartsData.lineChartLegend;
    public lineChartType = chartsData.lineChartType;      
    
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }
    
    public chartHovered(e: any): void {
        console.log(e);
    }

}