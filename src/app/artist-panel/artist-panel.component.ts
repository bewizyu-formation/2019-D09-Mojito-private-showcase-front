import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-artist-panel',
    templateUrl: './artist-panel.component.html',
    styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

    @Input()
    artist: {name: string, description: string, longDescription: string} = null;

    @Input()
    displayEdition = false;

    inputNameDisabled = true;
    inputShortDescriptionDisabled = true;
    inputLongDescriptionDisabled = true;

    nameCtrl: FormControl;
    shortDescCtrl: FormControl;
    longDescCtrl: FormControl;
    artistForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.nameCtrl = fb.control('');
        this.shortDescCtrl = fb.control('');
        this.longDescCtrl = fb.control('');
        this.artistForm = fb.group({
            name: this.nameCtrl,
            shortdesc: this.shortDescCtrl,
            longDesc: this.longDescCtrl,
        });
    }

    handleSubmit() {
        console.log('TODO');
    }

    ngOnInit() {
    }

}
