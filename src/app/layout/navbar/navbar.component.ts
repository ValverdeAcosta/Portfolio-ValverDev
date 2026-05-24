import { Component, HostListener, inject, signal } from '@angular/core';
import { NAV_ITEMS } from '../../core/data/portfolio.data';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly navItems = NAV_ITEMS;
  readonly isScrolled = signal(false);
  readonly themeService = inject(ThemeService);
  private readonly scrollService = inject(ScrollService);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
}
