import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistElementComponent } from './artist-element.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RatingElementComponent } from 'src/app/rating/rating-element/rating-element.component';
import { StarServiceComponent } from 'src/app/rating/star-service/star-service.component';
import { StarListComponent } from 'src/app/rating/star-list/star-list.component';
import { StarElementComponent } from 'src/app/rating/star-element/star-element.component';
import { HttpClientModule } from '@angular/common/http';

describe('ArtistElementComponent', () => {
  let component: ArtistElementComponent;
  let fixture: ComponentFixture<ArtistElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatIconModule,
        MatCardModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ ArtistElementComponent,
        RatingElementComponent,
          StarServiceComponent,
            StarListComponent,
            StarElementComponent  ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
