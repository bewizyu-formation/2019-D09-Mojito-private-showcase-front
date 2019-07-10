import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../environment.service';

const RESOURCES_COMMON_USER_BY_USERNAME = '/common/name/';

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
}
