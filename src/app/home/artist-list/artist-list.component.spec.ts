import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListComponent } from './artist-list.component';
import Artist from 'src/app/models/artist';
import { ArtistElementComponent } from '../artist-element/artist-element.component';
import { MatProgressSpinnerModule, MatIconModule, MatCardModule } from '@angular/material';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [
        ArtistListComponent,
        ArtistElementComponent
       ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
