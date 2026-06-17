import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  readonly navigationItems = [
    { label: 'Sobre nosotros', target: 'sobre-nosotros' },
    { label: 'AEAT', target: 'aeat' },
    { label: 'Facturación', target: 'facturacion' },
    { label: 'Contacto', target: 'contacto' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
