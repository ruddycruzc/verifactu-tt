import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private observer: IntersectionObserver | null = null;

  @Input('appScrollReveal') revealClass = 'tt-reveal-visible';
  @Input() scrollRevealRootMargin = '0px 0px -16% 0px';
  @Input() scrollRevealThreshold = 0.18;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.show();
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.show();
        this.observer?.disconnect();
        this.observer = null;
      },
      {
        threshold: this.scrollRevealThreshold,
        rootMargin: this.scrollRevealRootMargin,
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private show(): void {
    this.renderer.addClass(this.elementRef.nativeElement, this.revealClass || 'tt-reveal-visible');
  }
}
