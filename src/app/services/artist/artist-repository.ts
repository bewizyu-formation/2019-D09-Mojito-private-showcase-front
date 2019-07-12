import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '../environment.service';
import Artist from '../../models/artist';
import {Observable} from 'rxjs';

const RESOURCES_ARTIST_BY_USERNAME = '/artist/name/';
const RESOURCES_ARTIST_BY_ID = '/artist/id/';
const RESOURCES_ARTIST_ADD = '/artist/';
const RESOURCSE_WITH_PASSWORD = '?password=';

@Injectable({
  providedIn: 'root'
})
export class ArtistRepository {

  constructor(private http: HttpClient, private env: EnvironmentService) { }

    /**
     * Get an artist with its name
     */
    getArtistByUsername(username: string) {
        return this.http.get(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_ARTIST_BY_USERNAME}${username}`);
    }

    /**
     * Get an anrtist with its id
     */
    getArtistById(id: number): Observable<any> {
        return this.http.get(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_ARTIST_BY_ID}${id}`);
    }

    /**
     * Add new Artist
     */
    addArtist(artist: Artist, password: string): Observable<any> {
        return this.http.put(
            `${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_ARTIST_ADD}${RESOURCSE_WITH_PASSWORD}${password}`,
            JSON.stringify(artist)
        );
    }
}
