import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, merge} from 'rxjs';
import {ArtistService} from '../services/artist/artist.service';
import {AuthentificationService} from '../services/authentification/authentification.service';
import Artist from '../models/artist';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {PATH_ARTIST, PATH_HOME} from '../app.constantes';

const URL_PARAM = 'idartist';
const DEBOUNCE_TIME = 500;

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {

    artist: Artist = undefined;
    artistSub: Subscription;
    routeSub: Subscription;
    displayEdition = false;
    idArtistURL: number;

    emailCtrl: FormControl;
    phoneCtrl: FormControl;
    adressCtrl: FormControl;
    artistDetailForm: FormGroup;

    constructor(
        private artistService: ArtistService,
        private auth: AuthentificationService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.emailCtrl = fb.control('');
        this.phoneCtrl = fb.control('');
        this.adressCtrl = fb.control('');
        this.artistDetailForm = fb.group({
            email: this.emailCtrl,
            phone: this.phoneCtrl,
            adress: this.adressCtrl
        });

    }

    userConnectedIsArtistDisplayed(idUrl: number, idConnected): void {
        this.displayEdition = idUrl === idConnected;
    }

    handleSubmit() {
        this.artistService.updateArtist(this.artist).subscribe(resp => {
            console.log('user updated');
        });
        this.router.navigateByUrl(PATH_HOME)
            .then(() => {
                    this.router.navigate([PATH_ARTIST, this.idArtistURL]);
                }
            );
    }

    ngOnInit() {
        // Get the id in the url
        this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
            this.idArtistURL = Number.parseInt(params.get(URL_PARAM), 10);
            console.log('Param : ', this.idArtistURL);
            this.artistSub = this.artistService.getArtistById(this.idArtistURL)
                .subscribe((artist: Artist) => {
                    this.artist = artist;
                });

            // Enabling edition mode if the artist displayed is the user connected
            console.log(
                'enable edit mode : ',
                this.userConnectedIsArtistDisplayed(this.idArtistURL, this.auth.userConnectedId)
            );
        });

        // watching form changes
        this.emailCtrl.valueChanges.pipe(
            debounceTime(DEBOUNCE_TIME)
        ).subscribe(mail => {
            this.artist.email = mail;
        });
        this.phoneCtrl.valueChanges.pipe(
            debounceTime(DEBOUNCE_TIME)
        ).subscribe(phone => {
            this.artist.phone = phone;
        });
        this.adressCtrl.valueChanges.pipe(
            debounceTime(DEBOUNCE_TIME)
        ).subscribe(adress => {
            this.artist.adress = adress;
        });
    }

    ngOnDestroy(): void {
        if (this.artistSub !== undefined) {
            this.artistSub.unsubscribe();
        }
        if (this.routeSub !== undefined) {
            this.routeSub.unsubscribe();
        }
    }

}
