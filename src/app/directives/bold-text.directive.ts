import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[bold-text]',
  host:{
    '(mouseenter)': 'opMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class BoldTextDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  opMouseEnter(){
    this.setFontWeight("bold");
  }

  onMouseLeave(){
    this.setFontWeight("normal")
  }

  setFontWeight(val: string){
    this.renderer.setStyle(this.element.nativeElement, "font-weight", val)
  }

}
