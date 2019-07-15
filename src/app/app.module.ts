import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule, MatIconModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_CONFIG} from './app.config';
import {TokenInterceptorService} from './services/interceptors/token-interceptor.service';
import {ErrorInterceptorService} from './services/interceptors/error-interceptor.service';
import {CommonHeadersInterceptorService} from './services/interceptors/common-headers-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {IndexComponent} from './index/index.component';
import {ArtistComponent} from './artist/artist.component';
import {EventsComponent} from './events/events.component';
import {SettingsComponent} from './settings/settings.component';
import {ContactComponent} from './contact/contact.component';
import {BookComponent} from './book/book.component';
import {ErrorComponent} from './error/error.component';
import {HeaderComponent} from './header/header.component';
import {SideMenuComponent} from './header/side-menu/side-menu.component';
import {OptionsComponent} from './header/options/options.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {ClickOutsideModule} from 'ng-click-outside';
import {BackButtonComponent} from './header/back-button/back-button.component';
import {ConnectionButtonsComponent} from './header/connection-buttons/connection-buttons.component';
import { ValidatorService } from './validators/validatorService';
import { ArtistElementComponent } from './home/artist-element/artist-element.component';
import { ArtistListComponent } from './home/artist-list/artist-list.component';
import { ArtistServiceComponent } from './home/artist-service/artist-service.component';
import { ArtistPanelComponent } from './artist-panel/artist-panel.component';
import { EventElementComponent } from './events/event-element/event-element.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventServiceComponent } from './events/event-service/event-service.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SignInComponent,
        IndexComponent,
        ArtistComponent,
        EventsComponent,
        SettingsComponent,
        ContactComponent,
        BookComponent,
        ErrorComponent,
        HeaderComponent,
        SideMenuComponent,
        OptionsComponent,
        BackButtonComponent,
        ConnectionButtonsComponent,
        ArtistElementComponent,
        ArtistListComponent,
        ArtistServiceComponent,
        ArtistPanelComponent,
        EventElementComponent,
        EventListComponent,
        EventServiceComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        ClickOutsideModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [
        ValidatorService,
        {provide: APP_CONFIG, useValue: environment},
        {provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
