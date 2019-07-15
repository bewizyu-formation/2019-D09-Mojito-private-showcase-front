import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Artist} from '../models/artist';
import {ArtistService} from '../services/artist/artist.service';

const DEBOUNCE_TIME = 300;

@Component({
    selector: 'app-artist-panel',
    templateUrl: './artist-panel.component.html',
    styleUrls: ['./artist-panel.component.css']
})
export class ArtistPanelComponent implements OnInit {

    @Input()
    artist: Artist = null;

    @Input()
    displayEdition = false;

    inputNameDisabled = true;
    inputShortDescriptionDisabled = true;
    inputLongDescriptionDisabled = true;

    nameCtrl: FormControl;
    shortDescCtrl: FormControl;
    longDescCtrl: FormControl;
    artistForm: FormGroup;

    constructor(private artistService: ArtistService, private fb: FormBuilder) {
        this.nameCtrl = fb.control('');
        this.shortDescCtrl = fb.control('');
        this.longDescCtrl = fb.control('');
        this.artistForm = fb.group({
            name: this.nameCtrl,
            shortDesc: this.shortDescCtrl,
            longDesc: this.longDescCtrl,
        });
    }

    @ViewChild('name') nameField: ElementRef;
    inputNameToggle() {
        this.inputNameDisabled = !this.inputNameDisabled;
        if (!this.inputNameDisabled) {
            this.nameField.nativeElement.focus();
        }
    }

    @ViewChild('shortDesc') shortDescField: ElementRef;
    shortDescriptionToggle() {
        this.inputShortDescriptionDisabled = !this.inputShortDescriptionDisabled;
        if (!this.inputShortDescriptionDisabled) {
            this.shortDescField.nativeElement.focus();
        }
    }

    @ViewChild('longDesc') longDescField: ElementRef;
    longDescriptionToggle() {
        this.inputLongDescriptionDisabled = !this.inputLongDescriptionDisabled;
        if (!this.inputLongDescriptionDisabled) {
            this.longDescField.nativeElement.focus();
        }
    }

    handleSubmit() {
        console.log('going to send : ');
        console.log(this.artist);
        this.artistService.updateArtist(this.artist)
            .subscribe( (result: boolean) => {
                if (result) {
                    console.log('user updated');
                } else {
                    console.log('problem while updating user')
                }
            });
    }

    ngOnInit() {
        this.nameCtrl.valueChanges
            .pipe(
                debounceTime(DEBOUNCE_TIME)
            )
            .subscribe( name => {
                this.artist.name = name;
            });
        this.shortDescCtrl.valueChanges
            .pipe(
                debounceTime(DEBOUNCE_TIME)
            )
            .subscribe(shortDesc => {
                this.artist.description = shortDesc;
            });
        this.longDescCtrl.valueChanges
            .pipe(
                debounceTime(DEBOUNCE_TIME)
            )
            .subscribe(longDesc => {
                this.artist.longDescription = longDesc;
            });
    }

}
