import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionButtonsComponent } from './connection-buttons.component';

describe('ConnectionButtonsComponent', () => {
  let component: ConnectionButtonsComponent;
  let fixture: ComponentFixture<ConnectionButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
