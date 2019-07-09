import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artist.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from '../../app.config';
import {environment} from '../../../environments/environment';
import {EnvironmentService} from '../environment.service';

describe('ArtistService', () => {
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
    const service: ArtistService = TestBed.get(ArtistService);
    expect(service).toBeTruthy();
  });
});
