import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);

  scrollTo(sectionId: string): void {
    const section = this.document.getElementById(sectionId);
    if (!section) return;

    const navbar = this.document.querySelector<HTMLElement>('.navbar');
    const top = section.getBoundingClientRect().top + window.scrollY - (navbar?.offsetHeight ?? 0);
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
