import {Component, OnInit} from '@angular/core';
import {PATH_HOME} from '../../app.constantes';
import {Router} from '@angular/router';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

    constructor(private router: Router) {
    }

    navigateToHome() {
        this.router.navigate([PATH_HOME])
            .then(console.log)
            .catch(console.log);
    }

    ngOnInit() {
    }

}
