import {Component, OnInit} from '@angular/core';
import {PATH_CONTACT, PATH_EVENTS, PATH_INDEX} from '../../app.constantes';
import {Router} from '@angular/router';

const MENU_ICON_CLOSED = 'menu';
const MENU_ICON_OPENED = 'close';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

    sideMenuIcon = MENU_ICON_CLOSED;
    openSideMenu = false;

    constructor(private router: Router) {
    }

    /**
     * Handle clicks on the menu to open/close it and change its icon
     */
    handleMenuButtonClick() {
        this.sideMenuIcon = this.sideMenuIcon === MENU_ICON_CLOSED ? MENU_ICON_OPENED : MENU_ICON_CLOSED;
        this.openSideMenu = !this.openSideMenu;
    }

    navigateToIndex() {
        this.router.navigate([PATH_INDEX]);
    }

    navigateToEvents() {
        this.router.navigate([PATH_EVENTS]);
    }

    navigateToContact() {
        this.router.navigate([PATH_CONTACT]);
    }

    ngOnInit() {
    }

}
