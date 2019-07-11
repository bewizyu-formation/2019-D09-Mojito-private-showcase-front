import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistElementComponent } from './artist-element.component';

describe('ArtistElementComponent', () => {
  let component: ArtistElementComponent;
  let fixture: ComponentFixture<ArtistElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistElementComponent ]
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
