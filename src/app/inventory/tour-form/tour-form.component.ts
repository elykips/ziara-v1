import { Component, OnInit } from '@angular/core';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.scss']
})
export class TourFormComponent {

  constructor( private toursService: ToursService) { }

  postTour(tour){
    this.toursService.saveTours(tour);

  }

}
