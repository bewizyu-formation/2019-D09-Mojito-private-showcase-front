import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationRepository} from './authentification-repository';
import {UserType} from './user.type';
import {UserRepository} from '../user/user.repository';
import {ArtistRepository} from '../artist/artist-repository';

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
    public identifiant = null;

    /**
     * Type of user
     */
    public userType: UserType = null;

    constructor(
        private authRepository: AuthentificationRepository,
        private userRepository: UserRepository,
        private artistRepository: ArtistRepository
    ) {
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
                        this.identifiant = username;
                        console.log(`${this.identifiant} just connected.`);

                        // Looking for the connected user in the database and getting its type
                        this.findConnectedUserType();

                        resolve(true);
                    }, err => reject(err)
                );
        });
    }

    /**
     * Check the DB for the current connected user and update its type (user or artist)
     */
    findConnectedUserType(): void {
        if (!this.isConnected()) {
            return null;
        }

        const getUserSub = this.userRepository.getUserByUsername(this.identifiant)
            .subscribe( resp => {
                this.userType = UserType.COMMON;
                console.log('USER : ', resp);
            });
        const getArtistSub = this.artistRepository.getArtistByUsername(this.identifiant)
            .subscribe(resp => {
                this.userType = UserType.ARTIST;
                console.log('ARTIST : ', resp);
            });



    }

    /**
     * Disconnect the user
     */
    disconnect() {
        this.token = null;
        this.identifiant = null;
        this.userType = null;
    }

    /**
     * Check if there is a connection (username and token)
     */
    isConnected() {
        return this.token !== null &&
            this.identifiant !== null;
    }
}
