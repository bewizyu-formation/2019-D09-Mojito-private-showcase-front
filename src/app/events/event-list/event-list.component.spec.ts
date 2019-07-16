import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EventElementComponent } from '../event-element/event-element.component';
import { EventListComponent } from './event-list.component';
import { MatProgressSpinnerModule, MatIconModule, MatCardModule } from '@angular/material';
import { RatingElementComponent } from 'src/app/rating/rating-element/rating-element.component';
import { StarServiceComponent } from 'src/app/rating/star-service/star-service.component';
import { StarListComponent } from 'src/app/rating/star-list/star-list.component';
import { StarElementComponent } from 'src/app/rating/star-element/star-element.component';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports: [
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        HttpClientModule
      ],
      declarations: [
        EventListComponent,
        EventElementComponent,
        RatingElementComponent,
        StarServiceComponent,
        StarListComponent,
        StarElementComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
