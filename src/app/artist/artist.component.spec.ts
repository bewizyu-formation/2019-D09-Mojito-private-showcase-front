import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArtistComponent} from './artist.component';
import {AppModule} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('ArtistComponent', () => {
    let component: ArtistComponent;
    let fixture: ComponentFixture<ArtistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes([]),
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(ArtistComponent);
        component = fixture.componentInstance;
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
