import { Component, OnDestroy, OnInit } from '@angular/core';

import { HERO_CONTENT } from '../../../data/verifactu/hero.data';
import { HeroContentComponent } from '../../ui/hero/hero-content/hero-content';
import { HeroImage } from '../../ui/hero/hero-image/hero-image';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeroContentComponent, HeroImage],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements OnInit, OnDestroy {

  readonly hero = HERO_CONTENT;
  currentWord = '';

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: number | null = null;

  ngOnInit(): void {
    this.playTypingEffect();
  }

  ngOnDestroy(): void {
    if (this.timeoutId !== null) {
      window.clearTimeout(this.timeoutId);
    }
  }

  private playTypingEffect(): void {
    const words = this.hero.highlightedWords.length
      ? this.hero.highlightedWords
      : ['DIGITALIZACIÓN'];
    const word = words[this.wordIndex % words.length];

    this.currentWord = this.isDeleting
      ? word.substring(0, this.charIndex - 1)
      : word.substring(0, this.charIndex + 1);

    this.charIndex += this.isDeleting ? -1 : 1;

    let delay = this.isDeleting ? 70 : 130;

    if (!this.isDeleting && this.charIndex === word.length) {
      delay = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      delay = 650;
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % words.length;
    }

    this.timeoutId = window.setTimeout(() => this.playTypingEffect(), delay);
  }
}
