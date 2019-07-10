import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import {User} from '../user/user';
import { Router } from '@angular/router';
import { PATH_SIGN_IN, PATH_HOME, PATH_INDEX } from '../app.constantes';
import { confirmSimilarValidator } from '../validators/confirmCheckValidator';
import { HttpClient } from 'selenium-webdriver/http';
import { conditionallyRequiredValidator } from '../validators/conditionallyRequired';
import { ValidatorService } from '../validators/validatorService';
import { ValidateLoginNotTaken } from '../validators/dbQueryValidator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnChanges {

  idUserCtrl: FormControl;
  passwordCtrl: FormControl;
  passwordConfirmCtrl: FormControl;
  emailCtrl: FormControl;
  citiesCtrl: FormControl;
  artistCheck: FormControl;
  artistName: FormControl;
  description: FormControl;
  formInscription: FormGroup;

  user: User;

  cities: string[] = [
    'Lyon Rhône',
    'Marseille Bouches Rhône',
    'Rennes, Ille-et-Vilaine'
  ];

  isArtist = false;

  city = 'Lyon Rhône';


 constructor(private fb: FormBuilder, private router: Router, private validatorService: ValidatorService) {
      this.artistCheck = this.fb.control('', []);
      this.idUserCtrl = this.fb.control('', [Validators.required],
      ValidateLoginNotTaken.createValidator(this.validatorService, '').bind(this));
      this.passwordCtrl = this.fb.control('', [Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/)]);
      this.passwordConfirmCtrl = this.fb.control('', [Validators.required]);
      this.emailCtrl = this.fb.control('', [Validators.required, Validators.email]);
      this.artistName = this.fb.control('', []);
      this.description = this.fb.control('', []);


      this.formInscription = this.fb.group(
        {
          artistCheck: this.artistCheck,
          artistName : this.artistName,
          identifiant : this.idUserCtrl,
          password: this.passwordCtrl,
          description: this.description,
          passwordConfirm: this.passwordConfirmCtrl,
          email: this.emailCtrl,
          city: this.citiesCtrl
        },
        {validator : [conditionallyRequiredValidator(this.artistName, (contoler: AbstractControl) => contoler.value, this.artistCheck),
        this.matchingPasswords('password', 'passwordConfirm'),
        conditionallyRequiredValidator(this.description, (contoler: AbstractControl) => contoler.value, this.artistCheck)]
        }
      );
  }


  ngOnInit() {
      this.formInscription.valueChanges.subscribe(data => console.log(this.formInscription.valid));
  }

  matchingPasswords(password: string, passwordConfirmation: string) {
       return (group: FormGroup) => {
           const passwordInput = group.controls[password],
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

  goBack() {
        this.router.navigate([PATH_INDEX]);
  }

  handleSubmit() {
    console.log('starting submition');
    if (this.formInscription.valid) {
      console.log('form submitted');
      console.log(this.formInscription.get('email'));

      const userObj = {};

      Object.keys(this.formInscription.controls).forEach(field => {
        const control = this.formInscription.get(field);
        console.log(control);
        console.log(this.formInscription.validator);
        control.markAsTouched({ onlySelf: true });

        const value = control.value;
        userObj[field] = value;
      });

      this.user = new User(userObj['identifiant'], userObj['email'], userObj['password'], userObj['city']);

      if (!this.isRegisteringArtist) {
          // call user inscription

      } else {

          // call artist inscription
          this.user['artistName'] = this.formInscription.get('artistName').value;
          this.user['description'] = this.formInscription.get('description').value;
      }
      console.log(this.user);

    } else {
      this.router.navigate([PATH_SIGN_IN]);
    }
  }

  ngOnChanges() {
     console.log(this.formInscription.controls);
  }

  isRegisteringArtist() {
    return this.isArtist;
  }
}
