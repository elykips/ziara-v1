import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent implements OnInit {

 //Variable Declaration
 currentPage: string = "About"

 ngOnInit() {
     // Horizontal Timeline js for user timeline
    //  $.getScript('./assets/js/vertical-timeline.js');
 }

 showPage(page: string) {
     this.currentPage = page;
 }

}
