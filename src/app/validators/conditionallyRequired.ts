import {FormControl, ValidatorFn, AbstractControl} from "@angular/forms";

export function conditionallyRequiredValidator (controlToCheck: AbstractControl,checkCondition : (...any) => boolean,...variable:any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      console.log("variable",variable,variable[0].value,checkCondition(variable[0]),control.value,(control.value != "" && control.value != null))
      const validated = (controlToCheck.value != "" && controlToCheck.value != null) || !checkCondition(variable[0]);
      console.log(validated)
      return validated ? null : {'conditionallyRequired': {value: control.value}} ;
    };
};
