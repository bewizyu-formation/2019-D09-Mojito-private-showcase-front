import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConnectionButtonsComponent} from './connection-buttons.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('ConnectionButtonsComponent', () => {
    let component: ConnectionButtonsComponent;
    let fixture: ComponentFixture<ConnectionButtonsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes([]),
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(ConnectionButtonsComponent);
        component = fixture.componentInstance;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
