import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ArtistService} from '../services/artist/artist.service';
import {AuthentificationService} from '../services/authentification/authentification.service';
import Artist from '../models/artist';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit, OnDestroy {

    artist$: Observable<Artist>;
    artistSub: Subscription;

    constructor(private artistService: ArtistService, private auth: AuthentificationService) {}

    ngOnInit() {
        if (this.auth.isArtistConnected()) {
            this.artist$ = this.artistService.getArtistById(this.auth.userConnectedId);
        }
    }

    ngOnDestroy(): void {
        this.artistSub && this.artistSub.unsubscribe();
    }

}
