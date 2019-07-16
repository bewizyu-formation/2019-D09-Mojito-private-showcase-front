import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingElementComponent } from './rating-element.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';
import { StarServiceComponent } from '../star-service/star-service.component';
import { StarListComponent } from '../star-list/star-list.component';
import { StarElementComponent } from '../star-element/star-element.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RatingElementComponent', () => {
  let component: RatingElementComponent;
  let fixture: ComponentFixture<RatingElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ RatingElementComponent,
        StarServiceComponent,
          StarListComponent,
          StarElementComponent  ],
        providers: [
          HttpClient,
          HttpHandler,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
