import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
import {  AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ToursService {

  private toursCollection: AngularFirestoreCollection<any[]>;
  constructor( private afs: AngularFirestore ) {
   }

  saveTours(tour){
    // return this.db.list('/tours').push(tour);
  }

  getTours(){
    this.toursCollection = this.afs.collection('tours');
    return this.toursCollection.valueChanges();
  }

}
