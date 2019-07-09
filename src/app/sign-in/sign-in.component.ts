import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import {User} from '../user/user';
import { Router } from '@angular/router';
<<<<<<< HEAD
import {PATH_HOME, PATH_SIGN_IN} from '../app.constantes';
=======
import { PATH_SIGN_IN } from '../app.constantes';
import { confirmSimilarValidator } from '../validators/confirmCheckValidator';
<<<<<<< HEAD
>>>>>>> 6 inscription artist-
=======
import { HttpClient } from 'selenium-webdriver/http';
import { conditionallyRequiredValidator } from '../validators/conditionallyRequired';
>>>>>>> 6 artist inscription form- ajout de validateurs

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  isArtistCtrl: FormControl;
=======
>>>>>>> 3_US002_form signin lint
=======
=======
  artistCheck: FormControl;
>>>>>>> 6 artist inscription form- ajout de validateurs
  artistName: FormControl;
  description: FormControl;
>>>>>>> 6 inscription artist-
  formInscription: FormGroup;


  user: User;
  cities: string[] = [
    'Lyon Rhône',
    'Marseille Bouches Rhône',
    'Rennes, Ille-et-Vilaine'
  ];

  isArtist = false;

<<<<<<< HEAD
  city = 'Lyon Rhône';

  constructor(private fb: FormBuilder, private router: Router) {
=======
  city: string = this.cities[0];

  constructor(private fb: FormBuilder, private router: Router) {
      this.artistCheck = this.fb.control('');
      this.idUserCtrl = this.fb.control('', [ Validators.required ]);
      this.passwordCtrl = this.fb.control('', [ Validators.required]);
      this.passwordConfirmCtrl = this.fb.control('', [Validators.required,confirmSimilarValidator(this.passwordCtrl)]);
      this.emailCtrl = this.fb.control('', [Validators.required, Validators.email]);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3_US002_form signin lint

      this.idUserCtrl = this.fb.control('', [Validators.required]);
      this.passwordCtrl = this.fb.control('', [Validators.required]);
      this.passwordConfirmCtrl = this.fb.control('', [Validators.required]);
      this.emailCtrl = this.fb.control('', [Validators.required, Validators.email]);
      this.isArtistCtrl = this.fb.control(false);
      this.citiesCtrl = this.fb.control('', [Validators.required]);
=======
      this.artistName = this.fb.control('',[Validators.required]);
      this.description = this.fb.control('',[Validators.required]);
>>>>>>> 6 inscription artist-
=======
      this.artistName = this.fb.control('',[]);
      this.description = this.fb.control('',[]);
>>>>>>> 6 artist inscription form- ajout de validateurs
      this.formInscription = this.fb.group(
        {
          artistCheck:this.artistCheck,
          artistName : this.artistName,
          identifiant : this.idUserCtrl,
          password: this.passwordCtrl,
          description:this.description,
          passwordConfirm: this.passwordConfirmCtrl,
          email: this.emailCtrl,
<<<<<<< HEAD
          city: this.citiesCtrl,
          isArtist: this.isArtistCtrl
        }
=======
          city: this.citiesCtrl
        },
        {validator : [conditionallyRequiredValidator(this.artistName,(contoler:AbstractControl) => contoler.value,this.artistCheck),
        conditionallyRequiredValidator(this.description,(contoler:AbstractControl) => contoler.value,this.artistCheck)]}
>>>>>>> 6 artist inscription form- ajout de validateurs
      );
   }


  ngOnInit() {
  }

  goBack() {
    this.router.navigate([PATH_HOME]);
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

      console.log(this.user);

    } else {
      this.router.navigate([PATH_SIGN_IN]);
    }
  }

  isRegisteringArtist(){
    return this.isArtist;
  }

}
