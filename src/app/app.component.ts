import { Component, inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { ContactComponent } from './features/contact/contact.component';
import { HeroComponent } from './features/hero/hero.component';
import { PortfolioSectionsComponent } from './features/portfolio-sections/portfolio-sections.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, PortfolioSectionsComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-portfolio-sections />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  constructor() {
    this.themeService.init();
  }
}
