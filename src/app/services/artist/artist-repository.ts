import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EnvironmentService} from '../environment.service';

const RESOURCES_ARTIST_BY_USERNAME = '/artist/name/';

@Injectable({
  providedIn: 'root'
})
export class ArtistRepository {

  constructor(private http: HttpClient, private env: EnvironmentService) { }

    getArtistByUsername(username: string, token: string) {
        const headers = new HttpHeaders();
        headers.set('header', token);
        return this.http.get(
            `${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_ARTIST_BY_USERNAME}${username}`,
            {headers}
        );
    }
}
