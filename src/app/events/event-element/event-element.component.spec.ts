import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventElementComponent } from './event-element.component';
import { MatProgressSpinnerModule, MatIconModule, MatCardModule } from '@angular/material';
import { StarElementComponent } from 'src/app/rating/star-element/star-element.component';
import { StarServiceComponent } from 'src/app/rating/star-service/star-service.component';
import { RatingElementComponent } from 'src/app/rating/rating-element/rating-element.component';
import { StarListComponent } from 'src/app/rating/star-list/star-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('EventElementComponent', () => {
  let component: EventElementComponent;
  let fixture: ComponentFixture<EventElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports: [
        HttpClientModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [
        EventElementComponent,
          RatingElementComponent,
          StarServiceComponent,
          StarListComponent,
          StarElementComponent
        ],
      providers: [
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
