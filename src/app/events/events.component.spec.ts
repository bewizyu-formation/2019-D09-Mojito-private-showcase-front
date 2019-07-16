import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventServiceComponent } from './event-service/event-service.component';
import { EventsComponent } from './events.component';
import { EventElementComponent } from './event-element/event-element.component';
import { EventListComponent } from './event-list/event-list.component';
import {
  MatProgressSpinnerModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatDatepickerModule
} from '@angular/material';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { ArtistPanelComponent } from '../artist-panel/artist-panel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { APP_CONFIG } from '../app.config';
import { environment } from 'src/environments/environment';
import { RatingElementComponent } from '../rating/rating-element/rating-element.component';
import { StarServiceComponent } from '../rating/star-service/star-service.component';
import { StarListComponent } from '../rating/star-list/star-list.component';
import { StarElementComponent } from '../rating/star-element/star-element.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        ArtistPanelComponent,
        EventServiceComponent,
        EventsComponent,
        EventListComponent,
        EventElementComponent,
        RatingElementComponent,
        StarServiceComponent,
        StarListComponent,
        StarElementComponent
      ],
      providers : [
        AuthentificationService,
        {provide: APP_CONFIG, useValue: environment},
        HttpHandler,
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
