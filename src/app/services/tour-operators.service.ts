import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TourOperatorsService {

  constructor( private db: AngularFireDatabase) { }

  createBusibesProfile(profile){
    this.db.list('/tour-operators').push(profile);
  }

  getMyBusinesProfile(){}

  getMyAgents(){}

}
