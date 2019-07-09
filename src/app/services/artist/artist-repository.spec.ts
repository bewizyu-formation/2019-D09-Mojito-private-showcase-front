import {TestBed} from '@angular/core/testing';

import {ArtistRepository} from './artist-repository';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from '../../app.config';
import {environment} from '../../../environments/environment';
import {EnvironmentService} from '../environment.service';


describe('ArtistRepository', () => {
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
        const service: ArtistRepository = TestBed.get(ArtistRepository);
        expect(service).toBeTruthy();
    });
});
