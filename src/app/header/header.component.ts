import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {
    PATH_ARTIST,
    PATH_BOOK,
    PATH_EVENTS,
    PATH_HOME,
    PATH_INDEX,
} from '../app.constantes';
import {
    TITLE_ARTIST,
    TITLE_BOOK,
    TITLE_DEFAULT,
    TITLE_EVENTS,
    TITLE_HOME
} from './header.constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    title = '';
    subscribeCurrentUrl: Subscription;
    displayBackButton = false;
    displaySideMenu = false;
    displayOptions = false;
    displayConnectionButtons = false;

    constructor(private location: Location, private router: Router) {
    }

    /**
     * Get the correct title depending on the current url
     */
    getTitleFrom(path: string): string {
        let title: string;
        if (path.includes(PATH_ARTIST)) {
            title = TITLE_ARTIST;
        } else if (path.includes(PATH_BOOK)) {
            title = TITLE_BOOK;
        } else if (path.includes(PATH_EVENTS)) {
            title = TITLE_EVENTS;
        } else if (path.includes(PATH_HOME)) {
            title = TITLE_HOME;
        } else {
            title = TITLE_DEFAULT;
        }
        return title;
    }

    /**
     * Indicates if the header displays the back button or not
     */
    isBackButtonDisplayed(path: string) {
        let result: boolean;
        if (path === '/' + PATH_HOME || path === PATH_INDEX) {
            result = false;
        } else {
            result = true;
        }
        return result;
    }

    /**
     * Indicates if the menu is displayed or not
     */
    isSideMenuDisplayed(path: string) {
        let result: boolean;
        if (path === '/' + PATH_HOME) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }

    /**
     * Indicates if options are displayed or not
     */
    areOptionsDisplayed(path: string) {
        let result: boolean;
        if (path.includes(PATH_HOME)) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }

    /**
     * Indicates if authentification buttons are displayed or not are displayed or not
     */
    isConnectionButtonDisplayed(path: string) {
        let result: boolean;
        if (path === PATH_INDEX) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }

    ngOnInit() {
        // Subscribing to url changes to adapt the header
        this.subscribeCurrentUrl = this.router.events.subscribe(() => {
            setTimeout(() => {
                this.title = this.getTitleFrom(this.location.path());
                this.displayBackButton = this.isBackButtonDisplayed(this.location.path());
                this.displaySideMenu = this.isSideMenuDisplayed(this.location.path());
                this.displayOptions = this.areOptionsDisplayed(this.location.path());
                this.displayConnectionButtons = this.isConnectionButtonDisplayed(this.location.path());
            }, 100);
        });
    }

    ngOnDestroy() {
        this.subscribeCurrentUrl.unsubscribe();
    }
}
