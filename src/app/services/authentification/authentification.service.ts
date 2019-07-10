import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationRepository} from './authentification-repository';
import {UserType} from './user.type';
import {UserRepository} from '../user/user.repository';
import {ArtistRepository} from '../artist/artist-repository';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    /**
     * Authentification JWT Token
     */
    public token: string = null;

    /**
     * Current username
     */
    public identifiant$ = new BehaviorSubject<string>(null);

    /**
     * Obsverable on the connection status
     */
    public isConnected$ = new BehaviorSubject<boolean>(false);

    /**
     * Type of user
     */
    public userType: UserType = UserType.NONE;

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

                        // Looking for the connected user in the database and getting its type
                        this.findConnectedUserType(username);

                        this.identifiant$.next(username);
                        resolve(true);
                    }, err => reject(err)
                );
        });
    }

    /**
     * Check the DB for the current connected user and update its type (user or artist)
     */
    findConnectedUserType(username: string): void {
        this.userRepository.getUserByUsername(username)
            .subscribe( resp => {
                if (resp !== null) {
                    this.userType = UserType.COMMON;
                    console.log('USER : ', resp);
                    this.isConnected$.next(true);
                }
            });
        this.artistRepository.getArtistByUsername(username)
            .subscribe(resp => {
                if (resp !== null) {
                    this.userType = UserType.ARTIST;
                    console.log('ARTIST : ', resp);
                    this.isConnected$.next(true);
                }
            });
    }

    /**
     * Disconnect the user
     */
    disconnect() {
        this.token = null;
        this.identifiant$.next(null);
        this.isConnected$.next(false);
        this.userType = UserType.NONE;
    }

    /**
     * Indicates if the connected user is a normal user
     */
    isCommonUserConnected() {
        return this.userType === UserType.COMMON;
    }

    /**
     * Indicates if the connected user is an artist
     */
    isArtistConnected() {
        return this.userType === UserType.ARTIST;
    }
}
