import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { MatFormFieldModule, MatNativeDateModule, MatInputModule, MatDatepickerModule } from '@angular/material';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { ArtistPanelComponent } from '../artist-panel/artist-panel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { APP_CONFIG } from '../app.config';
import { environment } from 'src/environments/environment';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])

      ],
      declarations: [ EventsComponent,
      ArtistPanelComponent ],
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
