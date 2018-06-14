import { Component, OnInit } from '@angular/core';
import { ToursService } from '../tours.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-tours',
  templateUrl: './my-tours.component.html',
  styleUrls: ['./my-tours.component.scss']
})
export class MyToursComponent implements OnInit{
  
  tours: Observable<any[]>;
  constructor( 
    private toursServices: ToursService
  ) { }

  ngOnInit(){
    this.tours = this.toursServices.getTours()
  }

}
