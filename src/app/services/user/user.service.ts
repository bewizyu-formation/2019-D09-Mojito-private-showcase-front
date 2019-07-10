import {Injectable} from '@angular/core';
import {UserRepository} from './user.repository';
import {HttpResponse} from '@angular/common/http';
import {AuthentificationService} from '../authentification/authentification.service';
import {User} from '../../user/user';
@Injectable({
    providedIn: 'root'
})
export class UserService {

  constructor(private userRepository: UserRepository, private auth: AuthentificationService) {
  }

  /**
   * Get user by username
   */
  getUserByUsername(username: string) {
    return new Promise( (resolve, reject) => {
      this.userRepository.getUserByUsername(username, this.auth.token)
        .subscribe( (response: HttpResponse<any>) => {
            resolve(response.body);
        }, err => {
            reject(err);
        });
    });
  }

  addUser(user:User, password:string){
      return new Promise( (resolve, reject) => {
        this.userRepository.addUser(user, password)
          .subscribe( (response: HttpResponse<any>) => {
            console.log(response.status);
            resolve(response);
        }, err => {
            reject(err);
        });
      });
  }
}
