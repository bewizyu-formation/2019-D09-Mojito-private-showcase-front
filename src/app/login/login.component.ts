import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME, PATH_INDEX} from '../app.constantes';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../services/authentification/authentification.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginCtrl: FormControl;
    passwordCtrl: FormControl;
    loginForm: FormGroup;
    displayAuthentificationError = false;
    formChangeSubscription: Subscription;

    constructor(fb: FormBuilder, private router: Router, private authService: AuthentificationService) {
        this.loginCtrl = fb.control('', [Validators.required]);
        this.passwordCtrl = fb.control('', [
            Validators.required,
            Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')
        ]);
        this.loginForm = fb.group({
            login: this.loginCtrl,
            password: this.passwordCtrl
        });
    }

    handleClear() {
        this.router.navigate([PATH_INDEX]);
    }

    /**
     * Performs the login
     */
    handleSubmit() {
        this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
            .then(isConnected => {
                if (isConnected) {
                    console.log('connection success');
                    console.log('token : ', this.authService.token);
                    console.log('user : ', this.authService.identifiant);
                    this.router.navigate([PATH_HOME]);
                } else {
                    console.log('Wrong Login');
                }
            }).catch(err => {
                this.displayAuthentificationError = true;
                console.log('ERROR handling submit login infos : ', err);
                return null;
            });
    }

    ngOnInit() {
        this.formChangeSubscription = this.loginForm.valueChanges.subscribe(
            () => this.displayAuthentificationError = false
        );
    }

    ngOnDestroy() {
        this.formChangeSubscription.unsubscribe();
    }
}
