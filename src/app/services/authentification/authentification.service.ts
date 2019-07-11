import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationRepository} from './authentification-repository';
import {UserType} from './user.type';
import {UserRepository} from '../user/user.repository';
import {ArtistRepository} from '../artist/artist-repository';
import {Subject} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    /**
     * Authentification JWT Token
     */
    public token: string = null;

    /**
     * Current username in an observable, shareReplay(1) means you get last value emitted even if you subscribe
     * after its emission.
     */
    public identifiantSubject = new Subject<string>();
    public identifiant$ = this.identifiantSubject.pipe(shareReplay(1));

    /**
     * Infos on current user
     */
    public userConnectedId: number = null;
    public isConnected = false;
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

                        // Looking for the connected user in the database and getting its infos
                        this.findConnectedUserType(username);

                        // Connection successful
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
            .subscribe( (resp: {id: number}) => {
                if (resp !== null) {
                    this.isConnected = true;
                    this.userType = UserType.COMMON;
                    this.userConnectedId = resp.id;
                    this.identifiantSubject.next(username);
                    console.log('USER : ', resp);
                }
            });
        this.artistRepository.getArtistByUsername(username)
            .subscribe((resp: {id: number}) => {
                if (resp !== null) {
                    this.isConnected = true;
                    this.userType = UserType.ARTIST;
                    this.userConnectedId = resp.id;
                    this.identifiantSubject.next(username);
                    console.log('ARTIST : ', resp);
                }
            });
    }

    /**
     * Disconnect the user
     */
    disconnect() {
        this.token = null;
        this.isConnected = false;
        this.userType = UserType.NONE;
        this.userConnectedId = null;
        this.identifiantSubject.next(null);
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

    /**
     * Indicates if there's no connection
     */
    isNoneConnected() {
        return this.userType === UserType.NONE;
    }
}
