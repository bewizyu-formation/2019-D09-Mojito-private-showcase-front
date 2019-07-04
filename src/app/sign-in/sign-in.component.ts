import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  idUserCtrl:FormControl;
  passwordCtrl:FormControl;
  passwordConfirmCtrl:FormControl;
  emailCtrl:FormControl;
  citiesCtrl: FormControl;
  formInscription:FormGroup;

  cities: string[] = [
    'Lyon Rhône',
    'Marseille Bouches Rhône',
    'Rennes, Ille-et-Vilaine'
  ]

  isArtist:boolean = false;

  city: string = this.cities[0];
  
  constructor(private fb:FormBuilder) {

      this.idUserCtrl = this.fb.control("",[Validators.required]);
      this.passwordCtrl = this.fb.control("",[Validators.required]);
      this.passwordConfirmCtrl = this.fb.control("",[Validators.required]);
      this.emailCtrl = this.fb.control("",[Validators.required, Validators.email]);

      this.formInscription = this.fb.group(
        {
          idUser : this.idUserCtrl,
          password: this.passwordCtrl,
          passwordConfirm: this.passwordConfirmCtrl,
          email: this.emailCtrl,
          city: this.citiesCtrl
        }
      );

   }

  ngOnInit() {
  }

  handleClear() {
    this.formInscription.reset();
  }
}



