import {FormControl, ValidatorFn, AbstractControl} from "@angular/forms";
<<<<<<< HEAD
=======
import _ from 'lodash';
>>>>>>> d8d62e291e49d3a4d5c80755d7f63820fec9c641

export function confirmSimilarValidator (confirmControl : FormControl): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const confirmAlright = control.value == confirmControl.value;
      return confirmAlright ? null : {'confirmSimilar': {value: control.value}} ;
    };
};
