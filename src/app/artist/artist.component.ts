import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
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

    constructor(
        private artistService: ArtistService,
        private auth: AuthentificationService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        // Get the id in the url
        this.route.paramMap.subscribe( (params: ParamMap) => {
            const idArtistURL = params.get(URL_PARAM);
            console.log('Param : ', Number.parseInt(idArtistURL, 10));
            this.artist$ = this.artistService.getArtistById(Number.parseInt(idArtistURL, 10));
        });

        if (this.auth.isArtistConnected()) {
            // Handling edition if artist is connected
        }
    }

    ngOnDestroy(): void {
        if (this.artistSub !== undefined) {
            this.artistSub.unsubscribe();
        }
    }

}
