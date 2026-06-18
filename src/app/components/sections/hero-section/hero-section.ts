import { Component, OnDestroy, OnInit } from '@angular/core';

import { HERO_CONTENT } from '../../../data/verifactu/hero.data';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [AppButtonComponent],
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

    let delay = this.isDeleting ? 45 : 95;

    if (!this.isDeleting && this.charIndex === word.length) {
      delay = 7000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      delay = 500;
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % words.length;
    }

    this.timeoutId = window.setTimeout(() => this.playTypingEffect(), delay);
  }
}
