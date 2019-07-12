import {Component, OnDestroy, OnInit} from '@angular/core';
import {PATH_HOME, PATH_INDEX} from '../../app.constantes';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthentificationService} from '../../services/authentification/authentification.service';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit, OnDestroy {

    authentificationChangesSubscription: Subscription;
    pathToNavigateTo = PATH_HOME;

    constructor(private router: Router, private auth: AuthentificationService) {
    }

    navigate() {
        this.router.navigate([this.pathToNavigateTo]);
    }

    ngOnInit() {
        // Subscribing to connection changes to adapt the navigation
        this.authentificationChangesSubscription = this.auth.identifiant$.subscribe(
            username => {
                console.log('back button : ', username);
                if (username === null) {
                    this.pathToNavigateTo = PATH_INDEX;
                } else {
                    this.pathToNavigateTo = PATH_HOME;
                }
            }
        );
    }

    ngOnDestroy(): void {
        if (this.authentificationChangesSubscription !== undefined) {
            this.authentificationChangesSubscription.unsubscribe();
        }
    }

}
