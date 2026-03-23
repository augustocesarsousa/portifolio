import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './features/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent],
  template: `
    <app-header />
    <app-hero />
    <router-outlet />
    <p>Projeto em construção</p>
  `,
})
export class App {
  protected readonly title = signal('portifolio');
}
