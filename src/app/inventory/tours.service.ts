import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
import {  AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class ToursService {

  // $key: string;
  // file: File;
  // url: string;
  // progress: string;
  // CreatedAt: Date = new Date();
  constructor( private db: AngularFireDatabase) {
    // this.file = myFile;
   }

  saveTours(tour){
    return this.db.list('/tours').push(tour);
  }

  getTours(){
    return this.db.list('/tours').snapshotChanges()
  }

}
