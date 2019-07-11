import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_ARTIST, PATH_INDEX, PATH_SETTINGS} from '../../app.constantes';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {Subscription} from 'rxjs';

interface User {
    id?: number;
}

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnDestroy {

    openOptions = false;
    artistUsernameSub: Subscription;
    displayArtistChoice = false;

    constructor(
        private router: Router, private auth: AuthentificationService) {
    }

    navigateToArtist() {
        this.router.navigate([PATH_ARTIST, this.auth.userConnectedId]);
    }

    navigateToSettings() {
        this.router.navigate([PATH_SETTINGS]);
    }

    disconnect() {
        this.auth.disconnect();
        this.router.navigate([PATH_INDEX]);
    }

    /**
     * Handle clicks on options button to open/close it
     */
    handleOptionsButtonClick() {
        this.openOptions = !this.openOptions;
    }

    /**
     * Handle clicks outside options choices to close it
     */
    handleOutsideOptionsButtonClick() {
        this.openOptions = false;
    }

    ngOnInit() {
        this.artistUsernameSub = this.auth.identifiant$.subscribe(
            username => {
                console.log('Start subscribe action in options');
                if (this.auth.isConnected && this.auth.isArtistConnected()) {
                    console.log('user logged is an artist !');
                    this.displayArtistChoice = true;
                } else {
                    console.log('user logged is not an artist');
                    this.displayArtistChoice = false;
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.artistUsernameSub.unsubscribe();
    }
}
