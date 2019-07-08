import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_ARTIST, PATH_INDEX, PATH_SETTINGS} from '../../app.constantes';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

    openOptions = false;

    constructor(private router: Router) {
    }

    navigateToArtist() {
        const idartist = '42'; // TODO get artist id
        this.router.navigate([PATH_ARTIST, idartist]);
    }

    navigateToSettings() {
        this.router.navigate([PATH_SETTINGS]);
    }

    disconnect() {
        // TODO disconnect the user
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
    }

}
