import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArtistPanelComponent} from './artist-panel.component';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('ArtistPanelComponent', () => {
    let component: ArtistPanelComponent;
    let fixture: ComponentFixture<ArtistPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes([]),
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(ArtistPanelComponent);
        component = fixture.componentInstance;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
