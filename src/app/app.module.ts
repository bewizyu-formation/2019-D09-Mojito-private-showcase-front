import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';

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
import {SideMenuComponent} from './side-menu/side-menu.component';
import {OptionsComponent} from './options/options.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';

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
		OptionsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(ROUTES),
	],
	providers: [
		{provide: APP_CONFIG, useValue: environment},
		{provide: HTTP_INTERCEPTORS, useClass: CommonHeadersInterceptorService, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
