import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../environment.service';
import User from '../../models/user';

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
  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_COMMON_USER_BY_USERNAME}${username}`);
  }

  /**
   * Add new User
   */
  addUser(user: User, password: string): Observable<any> {
    return this.http.put(
      `${this.env.getPrivateShowcaseApiConfig().uri}${RESOURCES_COMMON_ADD}${RESOURCSE_WITH_PASSWORD}${password}`,
      JSON.stringify(user)
    );
  }

}
