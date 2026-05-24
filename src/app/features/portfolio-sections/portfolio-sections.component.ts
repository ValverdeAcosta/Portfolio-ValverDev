import { Component } from '@angular/core';
import { PROJECTS, SERVICES, SKILLS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-portfolio-sections',
  templateUrl: './portfolio-sections.component.html',
  styleUrl: './portfolio-sections.component.scss',
})
export class PortfolioSectionsComponent {
  readonly services = SERVICES;
  readonly projects = PROJECTS;
  readonly skills = SKILLS;
}
