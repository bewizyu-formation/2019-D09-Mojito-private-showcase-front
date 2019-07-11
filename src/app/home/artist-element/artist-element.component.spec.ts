import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistElementComponent } from './artist-element.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArtistElementComponent', () => {
  let component: ArtistElementComponent;
  let fixture: ComponentFixture<ArtistElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatCardModule,
        RouterTestingModule.withRoutes([])

      ],
      declarations: [ ArtistElementComponent ],
      providers: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
