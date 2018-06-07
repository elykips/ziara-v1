import { Component } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from '../../auth/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{
    user: firebase.User;
    constructor( private authService:AuthService ){
       this.authService.checkAuthState().subscribe(
           res=> this.user = res
       )
    }

    logout(){
        this.authService.logoutFromGoogle()
    }
}
