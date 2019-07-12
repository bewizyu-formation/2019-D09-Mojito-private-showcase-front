import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarElementComponent } from './star-element.component';

describe('StarElementComponent', () => {
  let component: StarElementComponent;
  let fixture: ComponentFixture<StarElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
