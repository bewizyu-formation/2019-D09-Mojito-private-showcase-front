import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListComponent } from './artist-list.component';
import { ArtistElementComponent } from '../artist-element/artist-element.component';
import { MatProgressSpinnerModule, MatIconModule, MatCardModule } from '@angular/material';
import { RatingElementComponent } from 'src/app/rating/rating-element/rating-element.component';
import { StarListComponent } from 'src/app/rating/star-list/star-list.component';
import { StarServiceComponent } from 'src/app/rating/star-service/star-service.component';
import { StarElementComponent } from 'src/app/rating/star-element/star-element.component';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [
        ArtistListComponent,
        ArtistElementComponent,
        RatingElementComponent,
          StarServiceComponent,
            StarListComponent,
            StarElementComponent
       ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
