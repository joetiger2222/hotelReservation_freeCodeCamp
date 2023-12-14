import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Directive({
  selector: '[hinvEmailValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const value = control.value as string;

    if (value.includes('test')) {
      return of({ invalidEmail: true }); 
    }

    return of(null); 
  }
}
