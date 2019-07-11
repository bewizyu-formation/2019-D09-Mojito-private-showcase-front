import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistServiceComponent } from './artist-service.component';

describe('ArtistServiceComponent', () => {
  let component: ArtistServiceComponent;
  let fixture: ComponentFixture<ArtistServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
