import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeaderComponent {
  isMenuOpen = false;

  navItems = [
    { name: 'Home', link: 'home' },
    { name: 'Sobre', link: 'sobre' },
    { name: 'Habilidades', link: 'habilidades' },
    { name: 'Projetos', link: 'projetos' },
    { name: 'Contato', link: 'contato' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.isMenuOpen = false;

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}
