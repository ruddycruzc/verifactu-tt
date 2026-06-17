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
    const word = this.hero.highlightedWords[this.wordIndex] ?? '';

    this.currentWord = this.isDeleting
      ? word.substring(0, this.charIndex - 1)
      : word.substring(0, this.charIndex + 1);

    this.charIndex += this.isDeleting ? -1 : 1;

    let delay = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === word.length) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      delay = 420;
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.hero.highlightedWords.length;
    }

    this.timeoutId = window.setTimeout(() => this.playTypingEffect(), delay);
  }
}
