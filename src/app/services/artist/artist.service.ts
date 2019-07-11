import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationService} from '../authentification/authentification.service';
import {ArtistRepository} from './artist-repository';
import {Observable, Subscription} from 'rxjs';
import Artist from '../../models/artist';


@Injectable({
    providedIn: 'root'
})
export class ArtistService {

    constructor(private artistRepository: ArtistRepository, private auth: AuthentificationService) {
    }

    /**
     * Get artist by username
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

    /**
     * Get artist by id
     */
    getArtistById(id: number): Observable<Artist> {
        return this.artistRepository.getArtistById(id);
    }

    /**
     * add new User
     */
    addArtist(artist: Artist, password: string) {
        return new Promise((resolve, reject) => {
            this.artistRepository.addArtist(artist, password)
                .subscribe((response: HttpResponse<any>) => {
                    console.log(response.status);
                    resolve(response);
                }, err => {
                    reject(err);
                });
        });
    }
}
