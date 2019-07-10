import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationService} from '../authentification/authentification.service';
import {ArtistRepository} from './artist-repository';


@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    constructor(private artistRepository: ArtistRepository, private auth: AuthentificationService) {
    }

    /**
     * Get user by identifiant
     */
    getArtistByUsername(username: string) {
        return new Promise((resolve, reject) => {
            this.artistRepository.getArtistByUsername(username)
                .subscribe((response: HttpResponse<any>) => {
                        resolve(response.body);
                    },
                    err => {
                        reject(err);
                    });
        });
    }
}
