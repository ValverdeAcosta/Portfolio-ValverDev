import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from '../models/portfolio.models';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly theme = signal<Theme>('dark');
  readonly isDark = computed(() => this.theme() === 'dark');

  init(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    this.theme.set(savedTheme ?? (prefersLight ? 'light' : 'dark'));

    effect(() => {
      const theme = this.theme();
      this.document.documentElement.dataset['theme'] = theme;
      localStorage.setItem(STORAGE_KEY, theme);
    });
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }
}
