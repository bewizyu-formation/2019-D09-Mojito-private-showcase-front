import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventServiceComponent } from './event-service/event-service.component';
import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EventElementComponent } from './event-element/event-element.component';
import { MatProgressSpinnerModule, MatIconModule, MatCardModule } from '@angular/material';

import {APP_CONFIG} from '../app.config';
import {environment} from '../../environments/environment';
describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        HttpClientModule
      ],
      declarations: [
        EventServiceComponent,
        EventsComponent,
        EventListComponent, 
        EventElementComponent ],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
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
