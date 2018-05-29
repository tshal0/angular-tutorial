import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[max]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi:true}]

})
export class MaxValidatorDirective implements Validator {

  @Input() max: number;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const currentVal = control.value;
    const isValid = currentVal <= this.max;

    return isValid ? null : {
      max: {
        valid: false
      }
    }
  }
}
