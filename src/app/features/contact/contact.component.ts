import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ContactComponent {}
