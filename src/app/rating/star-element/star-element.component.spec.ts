import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarElementComponent } from './star-element.component';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('StarElementComponent', () => {
  let component: StarElementComponent;
  let fixture: ComponentFixture<StarElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ StarElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
