import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {
    PATH_ARTIST,
    PATH_BOOK,
    PATH_EVENTS,
    PATH_HOME
} from '../app.constantes';
import {
    TITLE_ARTIST,
    TITLE_BOOK,
    TITLE_DEFAULT,
    TITLE_EVENTS,
    TITLE_HOME,
} from './header.constants';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModule} from '../app.module';

describe('HeaderComponent', () => {
    let header: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes([]),
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(HeaderComponent);
        header = fixture.componentInstance;
    }));

    it('should create', () => {
        console.log(header);
        expect(header).toBeTruthy();
    });

    it('should give the correct page title', () => {
        expect(header.getTitleFrom(PATH_ARTIST)).toEqual(TITLE_ARTIST);
        expect(header.getTitleFrom(PATH_BOOK)).toEqual(TITLE_BOOK);
        expect(header.getTitleFrom(PATH_EVENTS)).toEqual(TITLE_EVENTS);
        expect(header.getTitleFrom(PATH_HOME)).toEqual(TITLE_HOME);
        expect(header.getTitleFrom('/')).toEqual(TITLE_DEFAULT);
    });
});
