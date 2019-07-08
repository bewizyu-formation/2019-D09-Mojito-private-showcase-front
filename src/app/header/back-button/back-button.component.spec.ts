import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BackButtonComponent} from './back-button.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('BackButtonComponent', () => {
    let component: BackButtonComponent;
    let fixture: ComponentFixture<BackButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes([]),
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(BackButtonComponent);
        component = fixture.componentInstance;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BackButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
