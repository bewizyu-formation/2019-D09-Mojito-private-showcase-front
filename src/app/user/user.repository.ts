import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../services/environment.service';

export const RESOURCES_LOGIN = '/login';
export const RESOURCES_ARTIST_BY_USERNAME = '/artist/name/';
export const RESOURCES_COMMON_USER_BY_USERNAME = 'common/name/';

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  /**
   * login the current user and get the JWT token
   * @param username User login name
   * @param password User Password
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_LOGIN}`, {
      username,
      password,
    },
      {observe: 'response'}
    );
  }

    /**
     * Get an artist from its name
     */
  getArtistFromName(name: string, token: string): Observable<any> {
      const headers = new HttpHeaders();
      headers.set('token', token);
      return this.http.get(
          `${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_ARTIST_BY_USERNAME}${name}`,
          {headers}
      );
  }
}
