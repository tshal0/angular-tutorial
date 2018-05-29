import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS }from '@angular/forms';



@Directive({
  selector: '[min]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true}]
})
export class MinValidatorDirective implements Validator{

  @Input() min: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const currentValue = control.value;
    const isValid = currentValue > this.min;

    // Return errors as object. 
    return isValid ? null : {
      min: {
        valid: false
      }
    }
  }
}
