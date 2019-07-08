import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME, PATH_INDEX} from '../app.constantes';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginCtrl: FormControl;
    passwordCtrl: FormControl;
    loginForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router, private userService: UserService) {
        this.loginCtrl = fb.control('', [Validators.required]);
        this.passwordCtrl = fb.control(''/* TODO, [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')] */);
        this.loginForm = fb.group({
            login: this.loginCtrl,
            password: this.passwordCtrl
        });
    }

    ngOnInit() {
    }

    handleClear() {
        this.router.navigate([PATH_INDEX]);
    }

    handleSubmit() {
        this.checkLogin(this.loginForm.value.login, this.loginForm.value.password)
            .then(() => {
                return this.userService.getArtistByUsername(this.loginForm.value.login);
            }).then(httpResponse => {
                if (httpResponse !== null) {
                    console.log('No answer in artist');
                    // TODO getUserByName()
                } else {
                    console.log('get artist by name', httpResponse);
                    // TODO setCurrentUser()
                }
                return;
            }).then(() => {
                this.router.navigate([PATH_HOME]);
                return;
            }).catch(() => {
                console.log('ERROR handling submit');
                return null;
            });
    }

    createSession() {
        // how do we create a session of user?
        // token JWT
    }

    /**
     * If the user exists returns the token, null otherwise
     */
    checkLogin(login: string, password: string) {
        return this.userService
            .login(login, password)
            .then((token: string) => {
                // Gestion du token
                console.log('token : ', token);
                return token;
            }).then(() => {

                }
            ).catch(err => {
                console.log('ERROR when logging in : ', err);
                return null;
            });
    }
}
