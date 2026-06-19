import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  standalone: true,
  templateUrl: './hero-image.html',
  styleUrl: './hero-image.css'
})
export class HeroImage {
  @Input({ required: true }) image = '';
  @Input() tabletImage = '';
  @Input() imageAlt = '';
}
