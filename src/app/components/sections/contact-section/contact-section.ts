import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  readonly titleLineOne = '¿Hablamos de';
  readonly titleHighlight = 'VERIFACTU?';
  readonly description =
    'Contacta con nuestro equipo para resolver dudas sobre la adaptación de tu facturación.';
  readonly email = 'hello@tacticatic.com';
  readonly office = 'Gijón Impulsa Quinta la Vega, Cam. Viejo Musel, 246, Gijon-Oeste, 33299 Gijón, Asturias';
}
