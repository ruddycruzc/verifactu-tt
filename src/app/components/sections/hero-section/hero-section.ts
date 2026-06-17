import { Component } from '@angular/core';

import { HERO_CONTENT } from '../../../data/verifactu/hero.data';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {

  readonly hero = HERO_CONTENT;
currentWord = this.hero.highlightedWords[0];
}