import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-artist-panel',
    templateUrl: './artist-panel.component.html',
    styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

    @Input()
    artist: {name: string, description: string, longDescription: string} = null;

    constructor() {
    }

    ngOnInit() {
    }

}
