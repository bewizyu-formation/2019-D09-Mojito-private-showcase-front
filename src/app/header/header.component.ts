import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {PATH_ARTIST, PATH_BOOK, PATH_EVENTS, PATH_HOME} from '../app.constantes';

const TITLE_DEFAULT = 'Private ShowCase';
const TITLE_HOME = 'Artistes dans votre département';
const TITLE_ARTIST = 'Fiche Artiste';
const TITLE_BOOK = 'Créez un évènement';
const TITLE_EVENTS = 'Évènements';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	title = '';
	displayBackButton = true;
	currentUrl: string;
	subscribeCurrentUrl: Subscription;

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

	navigateToHome() {
		this.router.navigate([PATH_HOME]);
	}

	ngOnInit() {
		this.subscribeCurrentUrl = this.router.events.subscribe(val => {
			this.currentUrl = this.location.path(); // TODO for debug, remove when done
			this.title = this.getTitleFrom(this.location.path());
		});
	}

	ngOnDestroy() {
		this.subscribeCurrentUrl.unsubscribe();
	}

}
