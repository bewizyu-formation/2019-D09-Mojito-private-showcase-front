import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {
  PATH_ARTIST,
  PATH_BOOK,
  PATH_CONTACT, PATH_ERROR,
  PATH_EVENTS,
  PATH_HOME,
  PATH_INDEX,
  PATH_LOGIN,
  PATH_SETTINGS,
  PATH_SIGN_IN
} from './app.constantes';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ArtistComponent} from './artist/artist.component';
import {BookComponent} from './book/book.component';
import {ContactComponent} from './contact/contact.component';
import {EventsComponent} from './events/events.component';
import {SettingsComponent} from './settings/settings.component';
import {ErrorComponent} from './error/error.component';


export const ROUTES: Routes = [
    {path: PATH_INDEX , component: IndexComponent},
    {path: PATH_HOME, component: HomeComponent},
    {path: PATH_LOGIN, component: LoginComponent},
    {path: PATH_SIGN_IN, component: SignInComponent},
    {path: PATH_ARTIST + '/:idArtist', component: ArtistComponent},
    {path: PATH_BOOK + '/:idArtist', component: BookComponent},
    {path: PATH_CONTACT, component: ContactComponent},
    {path: PATH_EVENTS, component: EventsComponent},
    {path: PATH_SETTINGS, component: SettingsComponent},
    {path: PATH_ERROR, component: ErrorComponent},

  ];
