import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../environment.service';
import {HEADER_AUTHORIZATION} from '../../app.constantes';
import {User} from '../../user/user';

const RESOURCES_COMMON_USER_BY_USERNAME = '/common/name/';
const RESOURCES_COMMON_ADD = '/common/';
const RESOURCSE_WITH_PASSWORD = '?password=';
@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  constructor(private http: HttpClient, private env: EnvironmentService) {}

    /**
     * Get a User with its name
     */
    getUserByUsername(username: string, token: string): Observable<any> {
      const headers = new HttpHeaders();
      headers.set(HEADER_AUTHORIZATION, token);
      return this.http.get(
        `${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_COMMON_USER_BY_USERNAME}${username}`,
        {headers}
        );
    }

    addUser(user: User, password: string): Observable<any> {
      return this.http.put(
        `${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_COMMON_ADD}${RESOURCSE_WITH_PASSWORD}${password}`,
        JSON.stringify(user)
        );
      }
    }
