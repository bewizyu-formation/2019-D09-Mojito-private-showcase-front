import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SideMenuComponent} from './side-menu.component';
import {AppModule} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('SideMenuComponent', () => {
    let component: SideMenuComponent;
    let fixture: ComponentFixture<SideMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes([]),
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(SideMenuComponent);
        component = fixture.componentInstance;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
