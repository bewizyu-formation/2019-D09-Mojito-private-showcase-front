import {Injectable} from '@angular/core';
import {UserRepository} from './user.repository';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationService} from '../authentification/authentification.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private userRepository: UserRepository, private auth: AuthentificationService) {
    }

    /**
     * Get user by identifiant
     */
    getUserByUsername(username: string) {
        return new Promise( (resolve, reject) => {
            this.userRepository.getUserByUsername(username)
                .subscribe( (response: HttpResponse<any>) => {
                    resolve(response.body);
                }, err => {
                    reject(err);
                });
        });
    }
}
