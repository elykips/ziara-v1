import { Component } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from '../../auth/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{
    user: firebase.User;
    constructor( private router: Router, private authService:AuthService ){
       this.authService.checkAuthState().subscribe(
           res=> this.user = res
       )
    }

    logOutFromGoogle(){
        this.authService.logoutFromGoogle()
        this.router.navigate(['/login']);

    }
}
