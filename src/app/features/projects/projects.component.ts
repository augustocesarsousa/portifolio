import { Component } from '@angular/core';
import { Project } from '../../shared/interfaces/project.interface';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Gerenciador de Rotinas (Lojas Don Paco)',
      description:
        'Sistema customizado para suprir lacunas do ERP principal, automatizando processos críticos de assistência técnica, controle fiscal e controle de metas de vendas.',
      technologies: ['Java', 'Swing', 'SQL Server', 'JDBC', 'iReport'],
      githubUrl: 'https://github.com/augustocesarsousa/gerenciador-rotinas',
      highlights: [
        'Dashboard de metas de vendedores',
        'Cálculo automatizado de impostos',
        'Relatórios detalhados com iReport',
      ],
    },
    {
      title: 'DS Catalog',
      description:
        'Plataforma de catálogo de produtos com sistema completo de autenticação e controle de acesso.',
      technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com/augustocesarsousa/dscatalog-devsuperior',
      highlights: [
        'Segurança com Spring Security e JWT',
        'Testes automatizados com JUnit e Mockito',
        'Paginação de dados no frontend e backend',
      ],
    },
    {
      title: 'Gestão Institucional para ONGs',
      description:
        'Sistema em desenvolvimento para gerenciar processos internos para ONGs utilizando arquitetura moderna.',
      technologies: ['Java', 'Spring Boot 3', 'Angular 21', 'Docker', 'PostgreSQL'],
      githubUrl: 'https://github.com/augustocesarsousa/gerenciador_de_rotinas',
      highlights: [
        'Arquitetura baseada em DTOs e Exceptions personalizadas',
        'Interface responsiva com Angular Standalone',
        'Ambiente containerizado com Docker',
      ],
    },
  ];
}
