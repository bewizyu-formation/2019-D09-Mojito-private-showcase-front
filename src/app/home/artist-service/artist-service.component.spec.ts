import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistServiceComponent } from './artist-service.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArtistListComponent } from '../artist-list/artist-list.component';
import { ArtistElementComponent } from '../artist-element/artist-element.component';
import { MatIconModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { RatingElementComponent } from 'src/app/rating/rating-element/rating-element.component';
import { StarServiceComponent } from 'src/app/rating/star-service/star-service.component';
import { StarListComponent } from 'src/app/rating/star-list/star-list.component';
import { StarElementComponent } from 'src/app/rating/star-element/star-element.component';

describe('ArtistServiceComponent', () => {
  let component: ArtistServiceComponent;
  let fixture: ComponentFixture<ArtistServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports: [
        HttpClientModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [ ArtistServiceComponent,
        ArtistListComponent,
        ArtistElementComponent,
        RatingElementComponent,
          StarServiceComponent,
            StarListComponent,
            StarElementComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
