import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarServiceComponent } from './star-service.component';

describe('StarServiceComponent', () => {
  let component: StarServiceComponent;
  let fixture: ComponentFixture<StarServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
