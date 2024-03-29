import { TestBed } from '@angular/core/testing';

import { AuthentificationRepository } from './authentification-repository';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {of, throwError} from 'rxjs';
import {APP_CONFIG} from '../../app.config';
import {environment} from '../../../environments/environment';
import {EnvironmentService} from '../environment.service';

describe('AuthentificationRepository', () => {
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
    const service: AuthentificationRepository = TestBed.get(AuthentificationRepository);
    expect(service).toBeTruthy();
  });

    it('should login valid', () => {

        // Create the mock
        const httpClientSpy = TestBed.get(HttpClient);
        const fakeToken = 'Bearer fakeToken';
        const httpResponse = new HttpResponse({
            headers: new HttpHeaders().append('Authorization', fakeToken),
        });
        httpClientSpy.post.and.returnValue(of(httpResponse));

        // Test the login service
        const service: AuthentificationRepository = TestBed.get(AuthentificationRepository);
        service
            .login('Nartawak', 'xxxxx')
            .subscribe((response: HttpResponse<any>) => {
                expect(response.headers.get('Authorization')).toBe(fakeToken);
            });

    });

    it('should login throw 401 error', () => {

        const httpClientSpy = TestBed.get(HttpClient);
        const errorResponse = new HttpErrorResponse({
            error: 'test 401 error',
            status: 401, statusText: 'Not authorize'
        });

        httpClientSpy.post.and.returnValue(throwError(errorResponse));

        // Test the login service
        const service: AuthentificationRepository = TestBed.get(AuthentificationRepository);
        service
            .login('Nartawak', 'xxxxx')
            .subscribe(
                () => {
                    fail('expected an error, valid login');
                },
                (error: HttpErrorResponse)  => {
                    expect(error).toBeDefined();
                    expect(error.status).toBe(401);
                    expect(error.statusText).toBe('Not authorize');
                });
    });
});
