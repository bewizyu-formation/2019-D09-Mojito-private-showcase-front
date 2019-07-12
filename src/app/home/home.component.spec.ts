import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ArtistElementComponent } from './artist-element/artist-element.component';
import { ArtistServiceComponent } from './artist-service/artist-service.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { MatProgressSpinnerModule, MatCardModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule
      ],
      declarations: [ HomeComponent,
        ArtistServiceComponent,
          ArtistListComponent,
          ArtistElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
