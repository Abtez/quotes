import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elmnt:ElementRef) {
    elmnt.nativeElement.style.backgroundColor="#834c69"
   }

}
