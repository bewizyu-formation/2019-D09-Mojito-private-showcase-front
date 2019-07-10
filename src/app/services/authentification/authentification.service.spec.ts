import { TestBed } from '@angular/core/testing';

import { AuthentificationService } from './authentification.service';
import {HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from '../../app.config';
import {environment} from '../../../environments/environment';

describe('AuthentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
          HttpClientModule,
      ],
      providers: [
          {provide: APP_CONFIG, useValue: environment},
      ]
  }));

  it('should be created', () => {
    const service: AuthentificationService = TestBed.get(AuthentificationService);
    expect(service).toBeTruthy();
  });
});
