import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // countdown JS
    $.getScript('./assets/js/coming-soon/jquery.countdown.min.js');
    // coming soon JS start working after page load
    $.getScript('./assets/js/coming-soon/coming-soon.js');
}

}
