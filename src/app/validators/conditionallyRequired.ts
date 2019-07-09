import {FormControl, ValidatorFn, AbstractControl} from "@angular/forms";

export function conditionallyRequiredValidator (controlToCheck: AbstractControl,checkCondition : (...any) => boolean,...variable:any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      console.log("variable :",variable)
      console.log("variable value",variable[0].value)
      console.log("check result",checkCondition(variable[0]))
      console.log(controlToCheck.value,(controlToCheck.value != "" && controlToCheck.value != null))
      const validated = (controlToCheck.value != "" && controlToCheck.value != null) || !checkCondition(variable[0]);
      console.log("validated",validated)
      return validated ? null : {'conditionallyRequired': {value: control.value}} ;
    };
};
