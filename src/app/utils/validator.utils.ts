import {FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

function comparisonValidator() : ValidatorFn{
    return (group: FormGroup): ValidationErrors => {
       const password = group.controls['password'];
       const cpassword = group.controls['cpassword'];
       if (password.value !== cpassword.value) {
          cpassword.setErrors({notEquivalent: true});
       } else {
          cpassword.setErrors(null);
       }
       return;
 };
}

export class CustomValidators {
    static confirmPasswordValidator = comparisonValidator;
}