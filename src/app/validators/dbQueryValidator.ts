import {FormControl, ValidatorFn, AbstractControl} from "@angular/forms";
<<<<<<< HEAD
import { ValidatorService } from "./validatorService";
import { map } from "rxjs/operators";



export function checkLoginValidator (validatorService:ValidatorService,confirmControl : FormControl): ValidatorFn {
  return (control: AbstractControl) => {
     return validatorService.checkLoginNotTaken(control.value).pipe(map(res => {
       return res ? null : { emailTaken: true };
     }));
   };
=======

export function confirmSimilarValidator (confirmControl : FormControl): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const confirmAlright = control.value == confirmControl.value;
      return confirmAlright ? null : {'confirmSimilar': {value: control.value}} ;
    };
>>>>>>> d8d62e291e49d3a4d5c80755d7f63820fec9c641
};
