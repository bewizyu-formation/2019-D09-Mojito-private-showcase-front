import {FormControl, ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import { ValidatorService } from './validatorService';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


 export class ValidateLoginNotTaken {
   static createValidator(validatorService: ValidatorService, controllerName: string): AsyncValidatorFn {
     return (control: AbstractControl): Observable<ValidationErrors | null> => {
       return validatorService.checkLoginNotTaken(control.value).pipe(map(res => {
         return res ? null : { loginTaken: true };
       }));
     };
   }
 }
