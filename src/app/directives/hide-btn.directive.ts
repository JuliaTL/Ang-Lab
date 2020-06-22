import {Directive, TemplateRef, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHideBtn]'
})
export class HideBtnDirective {
  @Input('appHideBtn') set hideBtn(condition: boolean) {
    if(condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {}

}
