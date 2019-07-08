import {FormControl, ValidatorFn, AbstractControl} from "@angular/forms";
import _ from 'lodash';

export function confirmSimilarValidator (confirmControl : FormControl): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const confirmAlright = control.value == confirmControl.value;
      return confirmAlright ? null : {'confirmSimilar': {value: control.value}} ;
    };
};
