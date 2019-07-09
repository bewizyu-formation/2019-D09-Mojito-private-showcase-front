import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationService} from '../authentification/authentification.service';
import {ArtistRepository} from './artist-repository';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private artistRepository: ArtistRepository, private auth: AuthentificationService) { }

    /**
     * Get user by username
     */
    getArtistByUsername(username: string) {
        return new Promise( resolve => {
            this.artistRepository.getArtistByUsername(username, this.auth.token)
                .subscribe( (response: HttpResponse<any>) => {
                    resolve(response.body);
                });
        });
    }
}
