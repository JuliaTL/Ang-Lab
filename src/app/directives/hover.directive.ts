import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() dHover: { border: string, fontSize: string};

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dHover.border);
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', this.dHover.fontSize)
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', null)
  }

}
