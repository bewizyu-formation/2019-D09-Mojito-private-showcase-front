import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '../environment.service';

export const RESOURCES_LOGIN = '/login';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationRepository {

    constructor(
        private http: HttpClient,
        private env: EnvironmentService) {
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
}
