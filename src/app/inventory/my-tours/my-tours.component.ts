import { Component, OnInit } from '@angular/core';
import { ToursService } from '../tours.service';

@Component({
  selector: 'app-my-tours',
  templateUrl: './my-tours.component.html',
  styleUrls: ['./my-tours.component.scss']
})
export class MyToursComponent {
  tours:any;
  constructor( private toursServices: ToursService) { 
    this.tours = this.toursServices.getTours()
    console.log(this.tours)
  }

  // fetchTours(){
  //   this.tours = this.toursServices.getTours()
  //   console.log(this.tours)
  // }


}
