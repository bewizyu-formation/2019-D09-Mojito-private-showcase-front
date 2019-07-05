import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {
	PATH_ARTIST,
	PATH_BOOK,
	PATH_CONTACT,
	PATH_EVENTS,
	PATH_HOME,
	PATH_INDEX,
	PATH_SETTINGS
} from '../app.constantes';


const TITLE_DEFAULT = 'Private ShowCase';
const TITLE_HOME = 'Artistes dans votre département';
const TITLE_ARTIST = 'Fiche Artiste';
const TITLE_BOOK = 'Créez un évènement';
const TITLE_EVENTS = 'Évènements';

const MENU_ICON_CLOSED = 'menu';
const MENU_ICON_OPENED = 'close';

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
	openSideMenu = false;
	sideMenuIcon = MENU_ICON_CLOSED;
	displayOptions = false;
	openOptions = false;

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
		} else if (path.includes(PATH_ARTIST)) {
			title = TITLE_ARTIST;
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
	isBackButtonDisplayed(path: string){
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
	 * Handle clicks on the menu to open/close it and change its icon
	 */
	handleMenuButtonClick() {
		this.sideMenuIcon = this.sideMenuIcon === MENU_ICON_CLOSED ? MENU_ICON_OPENED : MENU_ICON_CLOSED;
		this.openSideMenu = !this.openSideMenu;
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

	navigateToIndex() {
		this.router.navigate([PATH_INDEX]);
	}

	navigateToHome() {
		this.router.navigate([PATH_HOME]);
	}

	navigateToEvents() {
		this.router.navigate([PATH_EVENTS]);
	}

	navigateToContact() {
		this.router.navigate([PATH_CONTACT]);
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

	ngOnInit() {
		// Subscribing to url changes to adapt the header
		this.subscribeCurrentUrl = this.router.events.subscribe(() => {
			this.openOptions = false;
			this.title = this.getTitleFrom(this.location.path());
			this.displayBackButton = this.isBackButtonDisplayed(this.location.path());
			this.displaySideMenu = this.isSideMenuDisplayed(this.location.path());
			this.displayOptions = this.areOptionsDisplayed(this.location.path());
		});
	}

	ngOnDestroy() {
		this.subscribeCurrentUrl.unsubscribe();
	}
}
