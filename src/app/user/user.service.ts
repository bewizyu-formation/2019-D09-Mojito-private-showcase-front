import {Injectable} from '@angular/core';
import {UserRepository} from './user.repository';
import {HttpResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    /**
     * Authentification JWT Token
     */
    public token: string;

    constructor(private userRepository: UserRepository) {
    }

    /**
     * Login the user
     * @param username User login name
     * @param password User Password
     */
    login(username: string, password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.userRepository
                .login(username, password)
                .subscribe((response: HttpResponse<any>) => {
                    console.log('http response : ', response);
                    this.token = response.headers.get('Authorization');
                    resolve(this.token);
                }, err => {
                    reject(err);
                });
        });
    }

    /**
     * Disconnect the user
     */
    disconnect() {
        this.token = null;
    }

    /**
     * Get user by username
     */
    getUserByUsername(username: string) {

    }

    getArtistByUsername(username: string) {
        return new Promise( resolve => {
            this.userRepository.getArtistFromName(username, this.token)
                .subscribe( (response: HttpResponse<any>) => {
                    resolve(response.body);
                });
        });
    }
}
