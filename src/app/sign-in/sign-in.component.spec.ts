import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ValidatorService } from '../validators/validatorService';
import { UserService } from '../services/user/user.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

import {APP_CONFIG} from '../app.config';
import {environment} from '../../environments/environment';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [SignInComponent],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
        ValidatorService,
        UserService,
        HttpHandler,
        HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
