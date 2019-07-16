import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import User from '../models/user';
import Artist from '../models/artist';
import { Router } from '@angular/router';
import { PATH_SIGN_IN, PATH_HOME, PATH_LOGIN, PATH_INDEX } from '../app.constantes';
import { confirmSimilarValidator } from '../validators/confirmCheckValidator';
import { HttpClient } from 'selenium-webdriver/http';
import { conditionallyRequiredValidator } from '../validators/conditionallyRequired';
import { ValidatorService } from '../validators/validatorService';
import { ValidateLoginNotTaken } from '../validators/dbQueryValidator';
import { UserService } from '../services/user/user.service';
import { ArtistService } from '../services/artist/artist.service';

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
  artist: Artist;
  messageLogin = '';
  messagePassword = '';
  messageGlobal = '';
  messageEmail = '';

  isArtist = false;

 constructor(private fb: FormBuilder, private router: Router,
  private validatorService: ValidatorService,  private userService: UserService, private artistService: ArtistService) {
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
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  handleClear() {
    this.router.navigate([PATH_INDEX]);
  }

  handleSubmit() {
    if (this.formInscription.valid) {
      const userObj = {};

      Object.keys(this.formInscription.controls).forEach(field => {
        const control = this.formInscription.get(field);
        control.markAsTouched({ onlySelf: true });

        const value = control.value;
        userObj[field] = value;
      });

      this.user = new User(userObj['identifiant'], userObj['email'], userObj['password'], userObj['city']);

      if (!this.isRegisteringArtist()) {
        // call user inscription
        console.log('inscription user');
        this.userService.addUser(this.user, this.formInscription.get('password').value)
          .then(code => {
            if (code === 1) {
              this.router.navigate([PATH_LOGIN]);
            }
          }).catch( httpResponse => {
            if (httpResponse.error === 3) {
              this.messageLogin = 'Le login est déjà utilisé';
            } else if (httpResponse.error === 2) {
              this.messagePassword = 'Le format du mot de passe est incorrect';
            } else if (httpResponse.error === 4) {
              this.messageEmail = 'Le format de l\'adresse email est incorrect';
            } else if (httpResponse.error === 0) {
              this.messageGlobal = 'Une erreur est intervenue, veuillez réessayer';
            } else {
              this.messageGlobal = 'Veuillez contacter les developpeurs, vous avez gagné un prix et découvert un nouveau bug';
            }
            return null;
          });
      } else {
        // call artist inscription
        this.artist = new Artist(
          0,
          userObj['identifiant'],
          userObj['email'],
          userObj['password'],
          userObj['city'],
          this.formInscription.get('artistName').value,
          this.formInscription.get('description').value);

        this.artistService.addArtist(this.artist, this.formInscription.get('password').value)
          .then(code => {
            if (code === 1) {
              this.router.navigate([PATH_LOGIN]);
            }
          }).catch( httpResponse => {
            if (httpResponse.error === 3) {
              this.messageLogin = 'Le login est déjà utilisé';
            } else if (httpResponse.error === 2) {
              this.messagePassword = 'Le format du mot de passe est incorrect';
            } else if (httpResponse.error === 4) {
              this.messageEmail = 'Le format de l\'adresse email est incorrect';
            } else if (httpResponse.error === 0) {
              this.messageGlobal = 'Une erreur est intervenue, veuillez réessayer';
            } else {
              this.messageGlobal = 'Veuillez contacter les developpeurs, vous avez gagné un prix et découvert un nouveau bug';
            }
            return null;
          });
      }

    } else {
      // this.router.navigate([PATH_SIGN_IN]);
    }
  }

  clearMessageLogin() {
    this.clearMessageGlobal();
    this.messageLogin = '';
  }
  clearMessagePassWord() {
    this.clearMessageGlobal();
    this.messagePassword = '';
  }
  clearMessageEmail() {
    this.messageEmail = '';
  }
  clearMessageGlobal() {
    this.messageGlobal = '';
  }

  ngOnChanges() {
     console.log(this.formInscription.controls);
  }

  isRegisteringArtist() {
    return this.isArtist;
  }
}
