import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventElementComponent } from './event-element.component';
import { MatProgressSpinnerModule, MatIconModule, MatCardModule } from '@angular/material';

describe('EventElementComponent', () => {
  let component: EventElementComponent;
  let fixture: ComponentFixture<EventElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports: [
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [ EventElementComponent ]
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
