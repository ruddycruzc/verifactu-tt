import { NavItem }
from '../../interfaces/data/nav-item.interface';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: 'Inicio',
    fragment: 'hero'
  },
  {
    label: '¿Qué es?',
    fragment: 'about'
  },
  {
    label: 'Beneficios',
    fragment: 'benefits'
  },
  {
    label: 'Solución',
    fragment: 'solution'
  },
  {
    label: 'Contacto',
    fragment: 'contact'
  }
];