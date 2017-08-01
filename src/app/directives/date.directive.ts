import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export function validateDate(): ValidatorFn {
  return (c: AbstractControl) => {
    const checkDate = (date) => {
      if (!date) { return false; }
      const dts  = date.split('/');
      if (dts.length === 0) { return false; }
      const dateTest = new Date(date);
      return !isNaN(+dateTest) &&
        dateTest.getFullYear() === parseInt(dts[2], 10) &&
        dateTest.getMonth() === (parseInt(dts[0], 10) - 1) &&
        dateTest.getDate() === parseInt(dts[1], 10);
    };
    const isValid = checkDate(c.value);

    if (isValid) {
      return null;
    } else {
      return {
        appDateVal: {
          valid: false
        }
      };
    }
  };
}

@Directive({
  selector: '[appDateVal][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: DateDirective, multi: true }
  ]
})
export class DateDirective implements Validator {
  public validator: ValidatorFn;
  constructor() {
    this.validator = validateDate();
  }
  validate(c: AbstractControl) {
    return this.validator(c);
  }

}
