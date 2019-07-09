import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PATH_HOME, PATH_INDEX} from '../app.constantes';
import {AbstractControl, ValidatorFn, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    // TODO : define name according to the user session
    user = 'NOM DE L\'UTILISATEUR';
    passwordCtrl: FormControl;
    newPasswordCtrl: FormControl;
    passwordConfirmationCtrl: FormControl;
    emailCtrl: FormControl;
    settingForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {

        // TODO: api call to check if the password is correct
        this.passwordCtrl = fb.control('', [Validators.required]);
        this.newPasswordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]);
        this.passwordConfirmationCtrl = fb.control('', [Validators.required]);
        this.emailCtrl = fb.control('', [Validators.email]);
        this.settingForm = fb.group({
            password: this.passwordCtrl,
            newPassword: this.newPasswordCtrl,
            passwordConfirmation:  this.passwordConfirmationCtrl,
            email: this.emailCtrl
        },
        {validator: this.matchingPasswords('newPassword', 'passwordConfirmation')}
        );
    }

    matchingPasswords(newPassword: string, passwordConfirmation: string) {
        return (group: FormGroup) => {
            const passwordInput = group.controls[newPassword],
            passwordConfirmationInput = group.controls[passwordConfirmation];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                console.log('password not equals');
                return passwordConfirmationInput.setErrors({notEquivalent: true});
            } else {
                console.log('password confirmed');
                return passwordConfirmationInput.setErrors(null);
            }
        };
    }

    ngOnInit() {
    }

    handleClear() {
        this.router.navigate([PATH_HOME]);
    }
    handleSubmit() {
        // TODO: make an api call to update this User

        // TODO: deconnect

        this.router.navigate([PATH_INDEX]);
    }
}
