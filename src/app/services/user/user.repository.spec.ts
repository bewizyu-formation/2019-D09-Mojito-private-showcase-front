import {TestBed} from '@angular/core/testing';

import {UserRepository} from './user.repository';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';


import {Observable, of, throwError} from 'rxjs';
import {APP_CONFIG} from '../../app.config';
import {environment} from '../../../environments/environment';
import {EnvironmentService} from '../environment.service';

describe('UserRepository', () => {
  beforeEach(() => {

    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
        EnvironmentService,
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
  });

  it('should be created', () => {
    const service: UserRepository = TestBed.get(UserRepository);
    expect(service).toBeTruthy();
  });
});
