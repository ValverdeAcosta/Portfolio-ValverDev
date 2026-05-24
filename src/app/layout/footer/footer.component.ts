import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <span>© 2024 DevFolio. Todos los derechos reservados.</span>
      <nav>
        <a href="#">Privacidad</a>
        <a href="#">Términos</a>
        <a href="#">Sitemap</a>
      </nav>
    </footer>
  `,
  styles: `
    footer {
      align-items: center;
      border-top: 1px solid var(--border-color);
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
      padding: 2rem 3rem;
    }

    nav {
      display: flex;
      gap: 1.25rem;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    @media (max-width: 640px) {
      footer {
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        padding-inline: 1.25rem;
      }
    }
  `,
})
export class FooterComponent {}
