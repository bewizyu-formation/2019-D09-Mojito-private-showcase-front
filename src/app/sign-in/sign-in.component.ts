import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {User} from '../user/user';
import { Router } from '@angular/router';
import { PATH_SIGN_IN } from '../app.constantes';

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
  formInscription: FormGroup;

  user: User;

  cities: string[] = [
    'Lyon Rhône',
    'Marseille Bouches Rhône',
    'Rennes, Ille-et-Vilaine'
  ]

  isArtist = false;

  city: string = this.cities[0];
  constructor(private fb: FormBuilder, private router: Router) {

      this.idUserCtrl = this.fb.control('', [Validators.required]);
      this.passwordCtrl = this.fb.control('', [Validators.required]);
      this.passwordConfirmCtrl = this.fb.control('', [Validators.required]);
      this.emailCtrl = this.fb.control('', [Validators.required, Validators.email]);

      this.formInscription = this.fb.group(
        {
          identifiant : this.idUserCtrl,
          password: this.passwordCtrl,
          passwordConfirm: this.passwordConfirmCtrl,
          email: this.emailCtrl,
          city: this.citiesCtrl
        }
      );

   }

  ngOnInit() {
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



