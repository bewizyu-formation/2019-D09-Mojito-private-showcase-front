import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';

export const PATH_HOME = '';
export const PATH_INSCRIPTION_USER = 'user/inscription';


export const ROUTES: Routes = [
    {path:PATH_INSCRIPTION_USER, component:FormulaireInscriptionComponent}
    
]