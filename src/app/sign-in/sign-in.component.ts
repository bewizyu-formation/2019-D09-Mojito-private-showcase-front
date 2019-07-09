import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {User} from '../user/user';
import { Router } from '@angular/router';
import {PATH_HOME, PATH_SIGN_IN} from '../app.constantes';

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
  isArtistCtrl: FormControl;
=======
>>>>>>> 3_US002_form signin lint
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

      this.idUserCtrl = this.fb.control(' ', [ Validators.required ]);
      this.passwordCtrl = this.fb.control(' ', [ Validators.required]);
      this.passwordConfirmCtrl = this.fb.control('', [Validators.required]);
      this.emailCtrl = this.fb.control('', [Validators.required, Validators.email]);
>>>>>>> 3_US002_form signin lint

      this.idUserCtrl = this.fb.control('', [Validators.required]);
      this.passwordCtrl = this.fb.control('', [Validators.required]);
      this.passwordConfirmCtrl = this.fb.control('', [Validators.required]);
      this.emailCtrl = this.fb.control('', [Validators.required, Validators.email]);
      this.isArtistCtrl = this.fb.control(false);
      this.citiesCtrl = this.fb.control('', [Validators.required]);
      this.formInscription = this.fb.group(
        {
          identifiant : this.idUserCtrl,
          password: this.passwordCtrl,
          passwordConfirm: this.passwordConfirmCtrl,
          email: this.emailCtrl,
          city: this.citiesCtrl,
          isArtist: this.isArtistCtrl
        }
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


}



