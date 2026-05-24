export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface CardItem {
  title: string;
  description: string;
  tags: string[];
}

export interface Project extends CardItem {
  category: string;
  gradient: string;
}

export interface Skill {
  name: string;
  percent: number;
}
