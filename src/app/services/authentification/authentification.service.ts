import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationRepository} from './authentification-repository';
import {UserRepository} from '../user/user.repository';
import {ArtistRepository} from '../artist/artist-repository';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    /**
     * Authentification JWT Token
     */
    public token: string;

    constructor(
        private authRepository: AuthentificationRepository,
        private userRepository: UserRepository,
        private artistRepository: ArtistRepository,
        ) {}

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
                    resolve(this.token);
                }, err => {
                    reject(err);
                });
        }).then(
            // Check if its a user
            () => this.userRepository.getUserByUsername(username, this.token)
                .subscribe((response: HttpResponse<any>) => {
                    return response.body;
                })
        ).then(
            userResult => {
                console.log('userResult : ', userResult);
                return true;
            }
        ).catch(
            () => false
        );
    }

    /**
     * Disconnect the user
     */
    disconnect() {
        this.token = null;
    }
}
