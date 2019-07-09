import {FormControl, ValidatorFn, AbstractControl} from "@angular/forms";
import { ValidatorService } from "./validatorService";
import { map } from "rxjs/operators";



export function checkLoginValidator (validatorService:ValidatorService,confirmControl : FormControl): ValidatorFn {
  return (control: AbstractControl) => {
     return validatorService.checkLoginNotTaken(control.value).pipe(map(res => {
       return res ? null : { emailTaken: true };
     }));
   };
};
