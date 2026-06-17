import { AfterViewInit, Component, ElementRef, Input, OnDestroy, inject } from '@angular/core';

import { AboutVerifactuContent } from '../../../interfaces/data/about-verifactu-content.interface';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-about-verifactu-info-block',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './about-verifactu-info-block.html',
  styleUrl: './about-verifactu-info-block.css',
})
export class AboutVerifactuInfoBlock implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private animationFrame: number | null = null;

  @Input({ required: true }) content!: AboutVerifactuContent;

  scrollProgress = 0;
  mediaScale = 0.68;

  private readonly updateOnScroll = (): void => {
    if (this.animationFrame !== null) {
      return;
    }

    this.animationFrame = window.requestAnimationFrame(() => {
      this.animationFrame = null;
      this.updateScrollProgress();
    });
  };

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.updateScrollProgress();
    window.addEventListener('scroll', this.updateOnScroll, { passive: true });
    window.addEventListener('resize', this.updateOnScroll);
  }

  ngOnDestroy(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.removeEventListener('scroll', this.updateOnScroll);
    window.removeEventListener('resize', this.updateOnScroll);

    if (this.animationFrame !== null) {
      window.cancelAnimationFrame(this.animationFrame);
    }
  }

  private updateScrollProgress(): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const revealStart = viewportHeight * 0.95;
    const revealEnd = viewportHeight * 0.22;
    const progress = (revealStart - rect.top) / (revealStart - revealEnd);

    this.scrollProgress = Math.min(Math.max(progress, 0), 1);
    this.mediaScale = 0.68 + this.scrollProgress * 0.32;
  }
}
