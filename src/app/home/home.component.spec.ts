import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ArtistElementComponent } from './artist-element/artist-element.component';
import { ArtistServiceComponent } from './artist-service/artist-service.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { MatProgressSpinnerModule, MatCardModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { StarElementComponent } from '../rating/star-element/star-element.component';
import { StarListComponent } from '../rating/star-list/star-list.component';
import { StarServiceComponent } from '../rating/star-service/star-service.component';
import { RatingElementComponent } from '../rating/rating-element/rating-element.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [ HomeComponent,
        ArtistServiceComponent,
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
