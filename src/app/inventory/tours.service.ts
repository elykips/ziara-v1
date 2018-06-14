import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
import {  AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ToursService {

  constructor( private db: AngularFireDatabase ) {
   }

  saveTours(tour){
    // return this.db.list('/tours').push(tour);
  }

  getTours(){
    return this.db.list('tours').valueChanges()
   
  }

}
