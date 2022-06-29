import { Directive } from '@angular/core';

@Directive({
  selector: '[appArrayDirective]'
})
export class ArrayDirectiveDirective {

  constructor() { }

  arrayOfNumber =[1,2,3,4,5,6,7,8,9,10];

}
