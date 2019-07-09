import {FormControl, ValidatorFn, AbstractControl} from '@angular/forms';

export function conditionallyRequiredValidator (controlToCheck: AbstractControl,
  checkCondition: (...any) => boolean, variable: any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const validated = (controlToCheck.value !== '' && controlToCheck.value !== null) || !checkCondition(variable);
      return validated ? null : {'conditionallyRequired': {value: control.value}};
    };
}
