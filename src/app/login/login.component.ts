import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME, PATH_INDEX} from '../app.constantes';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user/user.service';
import {AuthentificationService} from "../services/authentification/authentification.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginCtrl: FormControl;
    passwordCtrl: FormControl;
    loginForm: FormGroup;

    constructor(fb: FormBuilder, private router: Router, private authService: AuthentificationService) {
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
            .then(isConnected => {
                if (isConnected) {
                    console.log('connection success');
                    console.log('token : ', this.authService.token);
                    console.log('user : ', this.authService.username);
                    this.router.navigate([PATH_HOME]);
                } else {
                    // TODO Not connected message
                    console.log('Wrong Login');
                }
            }).catch(() => {
                console.log('ERROR handling submit login infos');
                return null;
            });
    }

    /**
     * Check if the user exists
     */
    checkLogin(login: string, password: string) {
        return this.authService.login(login, password);
    }
}
