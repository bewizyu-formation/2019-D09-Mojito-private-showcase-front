import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_ARTIST, PATH_INDEX, PATH_SETTINGS} from '../../app.constantes';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {ArtistService} from '../../services/artist/artist.service';
import {UserType} from '../../services/authentification/user.type';
import {Subscription} from 'rxjs';

interface User {
    id: string;
}

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnDestroy {

    openOptions = false;
    artistUsernameSub: Subscription;
    artistUsername = null;
    artistId = '';
    displayArtistChoice = false;

    constructor(
        private router: Router,
        private auth: AuthentificationService,
        private artistService: ArtistService) {
    }

    navigateToArtist() {
        this.router.navigate([PATH_ARTIST, this.artistId]);
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
        this.artistUsernameSub = this.auth.identifiant$.asObservable().subscribe(
            username => {
                if (username !== null && this.auth.userType === UserType.ARTIST) {
                    this.artistUsername = username;
                    console.log('user logged is an artist !');
                    this.artistService.getArtistByUsername(username).then(
                        (user: User) => {
                            this.artistId = user.id;
                            this.displayArtistChoice = true;
                        });
                } else {
                    this.artistUsername = null;
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
