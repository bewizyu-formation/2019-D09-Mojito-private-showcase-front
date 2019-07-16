import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarListComponent } from './star-list.component';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { StarElementComponent } from '../star-element/star-element.component';

describe('StarListComponent', () => {
  let component: StarListComponent;
  let fixture: ComponentFixture<StarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ StarListComponent,
      StarElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
