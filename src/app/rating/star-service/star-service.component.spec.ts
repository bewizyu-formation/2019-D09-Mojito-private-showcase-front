import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarServiceComponent } from './star-service.component';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { StarElementComponent } from '../star-element/star-element.component';
import { StarListComponent } from '../star-list/star-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('StarServiceComponent', () => {
  let component: StarServiceComponent;
  let fixture: ComponentFixture<StarServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ StarServiceComponent,
        StarListComponent,
        StarElementComponent ],
      providers: [
        HttpClient,
        HttpHandler,
      ]
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
