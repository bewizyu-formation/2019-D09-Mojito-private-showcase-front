import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationRepository} from './authentification-repository';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    /**
     * Authentification JWT Token
     */
    public token: string = null;

    /**
     * Current user
     */
    public username = '';

    constructor(private authRepository: AuthentificationRepository) {
    }

    /**
     * Login the user and return a promise on whether it went well or not
     * @param username User login name
     * @param password User Password
     */
    login(username: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.authRepository
                .login(username, password)
                .subscribe((response: HttpResponse<any>) => {
                    this.token = response.headers.get('Authorization');
                    this.username = username;
                    resolve(true);
                }, () => {
                    reject(false);
                });
        });
    }

    /**
     * Disconnect the user
     */
    disconnect() {
        this.token = null;
        this.username = '';
    }

    /**
     * Check if there is a connection
     */
    isConnected() {
        return this.token !== null && this.username !== '';
    }
}
