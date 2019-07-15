import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule, MatIconModule, MatCardModule } from '@angular/material';
import { EventServiceComponent } from './event-service.component';
import { EventListComponent } from '../event-list/event-list.component';
import { EventElementComponent } from '../event-element/event-element.component';

import {APP_CONFIG} from '../../app.config';
import {environment} from '../../../environments/environment';
describe('EventServiceComponent', () => {
  let component: EventServiceComponent;
  let fixture: ComponentFixture<EventServiceComponent>;

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
        EventListComponent, 
        EventElementComponent ],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
