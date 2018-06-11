import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile-wizard',
  templateUrl: './create-profile-wizard.component.html',
  styleUrls: ['./create-profile-wizard.component.scss']
})
export class CreateProfileWizardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $.getScript('./assets/js/jquery.steps.js');
    $.getScript('./assets/js/jquery.steps.min.js');
    $.getScript('./assets/js/wizard-steps.js');

}
}
