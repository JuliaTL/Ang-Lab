import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() dHover: { borderColor: string, fontSize: string};
  @HostBinding('style.fontSize') elFontSize = null;
  @HostBinding('style.borderColor') elBorder = null;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') onEnter() {
    this.elFontSize = this.dHover.fontSize;
    this.elBorder = this.dHover.borderColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dHover.border);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', this.dHover.fontSize);
  }

  @HostListener('mouseleave') onLeave() {
    this.elFontSize = null;
    this.elBorder = null;
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', null);
  }

}
