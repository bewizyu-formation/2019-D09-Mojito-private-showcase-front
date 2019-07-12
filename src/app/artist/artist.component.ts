import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, merge} from 'rxjs';
import {ArtistService} from '../services/artist/artist.service';
import {AuthentificationService} from '../services/authentification/authentification.service';
import Artist from '../models/artist';
import {ActivatedRoute, ParamMap} from '@angular/router';

const URL_PARAM = 'idartist';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {

    artist$: Observable<Artist>;
    artistSub: Subscription;
    routeSub: Subscription;
    displayEdition = false;

    constructor(
        private artistService: ArtistService,
        private auth: AuthentificationService,
        private route: ActivatedRoute
    ) {}

    userConnectedIsArtistDisplayed(idUrl: string, idConnected): void {
        this.displayEdition = idUrl === idConnected;
    }

    ngOnInit() {
        // Get the id in the url
        this.routeSub = this.route.paramMap.subscribe( (params: ParamMap) => {
            const idArtistURL = params.get(URL_PARAM);
            console.log('Param : ', Number.parseInt(idArtistURL, 10));
            this.artist$ = this.artistService.getArtistById(Number.parseInt(idArtistURL, 10))

            // Enabling edition mode if the artist displayed is connected
            this.userConnectedIsArtistDisplayed(idArtistURL, this.auth.userConnectedId);
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
