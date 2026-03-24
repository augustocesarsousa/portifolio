import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { SkillsComponent } from '../../features/skills/skills.component';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, HeaderComponent, HeroComponent, AboutComponent, SkillsComponent],
  templateUrl: './main-layout.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MainLayoutComponent {}
