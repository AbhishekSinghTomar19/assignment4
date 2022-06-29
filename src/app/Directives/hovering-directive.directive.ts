import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoveringDirective]'
})
export class HoveringDirectiveDirective {

  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','pink');
    this.renderer.setStyle(this.eleRef.nativeElement,'border-radius','5px');
    this.renderer.setStyle(this.eleRef.nativeElement,'height','20px');
    this.renderer.setStyle(this.eleRef.nativeElement,'width','200px');
  }

  @HostListener('mouseenter') mouseEnter(){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','aqua');
    this.renderer.setStyle(this.eleRef.nativeElement,'border-radius','25px');
    this.renderer.setStyle(this.eleRef.nativeElement,'height','400px');
    this.renderer.setStyle(this.eleRef.nativeElement,'width','400px');
  }

  @HostListener('mouseleave') mouseLeave(){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','pink');
    this.renderer.setStyle(this.eleRef.nativeElement,'border-radius','5px');
    this.renderer.setStyle(this.eleRef.nativeElement,'height','20px');
    this.renderer.setStyle(this.eleRef.nativeElement,'width','200px');
  }
}
