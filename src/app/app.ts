import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<p>Projeto iniciado</p>
    <router-outlet />`,
})
export class App {
  protected readonly title = signal('portifolio');
}
