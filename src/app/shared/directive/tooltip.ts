import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input('appTooltip') @HostBinding('attr.title') tooltipText = '';
}
