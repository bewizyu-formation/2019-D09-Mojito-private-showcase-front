import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from './app.config';
import {environment} from '../environments/environment';
import {AppModule} from './app.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes([]),
                HttpClientModule,
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    }));
});
