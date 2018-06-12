import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TourOperatorsService } from '../../services/tour-operators.service';

@Component({
  selector: 'app-create-profile-wizard',
  templateUrl: './create-profile-wizard.component.html',
  styleUrls: ['./create-profile-wizard.component.scss']
})
export class CreateProfileWizardComponent implements OnInit {

  constructor( private tourOperatorService:TourOperatorsService) { }

  ngOnInit() {
    // $.getScript('./assets/js/jquery.steps.js');
    $.getScript('./assets/js/jquery.steps.min.js');
    $.getScript('./assets/js/wizard-steps.js');
  }

  postBusinessProfile(profile){
    // this.tourOperatorService.createBusibesProfile(profile)
    console.log(profile)

  }


}
