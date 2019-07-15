import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

const DEBOUNCE_TIME = 300;

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
            shortDesc: this.shortDescCtrl,
            longDesc: this.longDescCtrl,
        });
    }

    inputNameToggle() {
        this.inputNameDisabled = !this.inputNameDisabled;
    }
    shortDescriptionToggle() {
        this.inputShortDescriptionDisabled = !this.inputShortDescriptionDisabled;
    }

    longDescriptionToggle() {
        this.inputLongDescriptionDisabled = !this.inputLongDescriptionDisabled;
    }

    handleSubmit() {
        console.log('TODO');
    }

    ngOnInit() {
        this.nameCtrl.valueChanges
            .pipe(
                debounceTime(DEBOUNCE_TIME)
            )
            .subscribe(console.log);
        this.shortDescCtrl.valueChanges
            .pipe(
                debounceTime(DEBOUNCE_TIME)
            )
            .subscribe(console.log);
        this.longDescCtrl.valueChanges
            .pipe(
                debounceTime(DEBOUNCE_TIME)
            )
            .subscribe(console.log);
    }

}
