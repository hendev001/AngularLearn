// directives are a way to attach behavior to DOM elements


/*. Types of directives */

/*. components a special directive */
    @Component({
  selector: 'app-hello',
  template: `<h1>Hello</h1>`
})


/*. Structural directive */

*ngIf
*ngFor
*ngSwitch


<div *ngIf="isVisible">Hello</div>

// custom structural directive
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class AppIfDirective {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

  @Input() set appIf(condition: boolean) {
    this.view.clear();
    if (condition) {
      this.view.createEmbeddedView(this.template);
    }
  }
}


/*. Attribute Directives */

ngClass
ngStyle


<div [ngClass]="{ active: isActive }"></div>

// custom attri directive
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onHover() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}


