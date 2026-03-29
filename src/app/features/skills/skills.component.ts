import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SkillsComponent {}
