import { Component } from '@angular/core';

import { HERO_CONTENT } from '../../../data/verifactu/hero.data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {

  readonly hero = HERO_CONTENT;

}