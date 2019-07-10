import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import {User} from '../user/user';
import { Router } from '@angular/router';
import { PATH_SIGN_IN, PATH_HOME, PATH_LOGIN, PATH_INDEX } from '../app.constantes';
import { confirmSimilarValidator } from '../validators/confirmCheckValidator';
import { HttpClient } from 'selenium-webdriver/http';
import { conditionallyRequiredValidator } from '../validators/conditionallyRequired';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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
  messageLogin = "";
  messagePassword = "";
  messageGlobal = "";

  cities: string[] = [
  'Lyon Rhône',
  'Marseille Bouches Rhône',
  'Rennes, Ille-et-Vilaine'
  ];

  isArtist = false;

  city: string = this.cities[0];

  constructor(private fb: FormBuilder, private router: Router,  private userService: UserService) {
    this.artistCheck = this.fb.control('');
    this.idUserCtrl = this.fb.control('', [Validators.required]);
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
      conditionallyRequiredValidator(this.description, (contoler: AbstractControl) => contoler.value, this.artistCheck)]}
      );
  }


  ngOnInit() {
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

  handleClear() {
    this.router.navigate([PATH_INDEX]);
  }

  handleSubmit() {
    if (this.formInscription.valid) {
      console.log('form submitted');
      console.log(this.formInscription.get('email'));

      const userObj = {};

      Object.keys(this.formInscription.controls).forEach(field => {
        const control = this.formInscription.get(field);
        control.markAsTouched({ onlySelf: true });

        const value = control.value;
        userObj[field] = value;
      });

      this.user = new User(userObj['identifiant'], userObj['email'], userObj['city']);

      if (!this.isRegisteringArtist()) {
        // call user inscription
        console.log('inscription user');
        this.userService.addUser(this.user, this.formInscription.get('password').value)
          .then(isAdded => {
            console.log(isAdded);
            if(isAdded) {
              console.log('ajout sucess');
              // this.router.navigate([PATH_LOGIN]);
            }
          }).catch( httpResponse => {
            console.log(httpResponse);
            console.log('ERROR handling submit new user infos');
            console.log(httpResponse.error);
            if(httpResponse.error == 3) {
              this.messageLogin = "Le login est déjà utilisé";
            } else if(httpResponse.error == 2) {
              this.messagePassword = "Le format du mot de passe est incorrect";
            } else if(httpResponse.error == 0) {
              this.messageGlobal = "Une erreur est intervenue, veuillez réessayer";
            } else {
              this.messageGlobal = "Veuillez contacter les developpeurs, vous avez gagné un prix et découvert un nouveau bug";
            }
            return null;
          });
      } else {

        console.log('inscription artiste');

        // call artist inscription
      }
      console.log(this.user);

    } else {
      // this.router.navigate([PATH_SIGN_IN]);
    }
  }

  clearMessageLogin() {
    this.clearMessageGlobal()
    this.messageLogin = "";
  }
  clearMessagePassWord() {
    this.clearMessageGlobal()
    this.messagePassword= "";
  }
  clearMessageGlobal() {
    this.messageGlobal = "";
  }
  isRegisteringArtist() {
    return this.isArtist;
  }
}
