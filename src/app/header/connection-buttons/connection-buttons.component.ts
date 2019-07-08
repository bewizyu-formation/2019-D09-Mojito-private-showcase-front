import {Component, OnInit} from '@angular/core';
import {PATH_LOGIN, PATH_SIGN_IN} from '../../app.constantes';
import {Router} from '@angular/router';

@Component({
    selector: 'app-connection-buttons',
    templateUrl: './connection-buttons.component.html',
    styleUrls: ['./connection-buttons.component.css']
})
export class ConnectionButtonsComponent implements OnInit {

    constructor(private router: Router) {
    }

    navigateToLogin() {
        this.router.navigate([PATH_LOGIN]);
    }

    navigateToSignIn() {
        this.router.navigate([PATH_SIGN_IN]);
    }

    ngOnInit() {
    }

}
