import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent],
  template: `
    <app-main-layout />
    <router-outlet />
    <p>Projeto em construção</p>
  `,
})
export class App {
  protected readonly title = signal('portifolio');
}
