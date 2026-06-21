import { Component, ElementRef, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-animated-lines-background',
  standalone: true,
  templateUrl: './animated-lines-background.html',
  styleUrl: './animated-lines-background.css',
})
export class AnimatedLinesBackground {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly wavePaths = Array.from({ length: 38 }, (_, index) => {
    const y = 58 + index * 5.6;
    const lift = index - 18.5;

    return `M -70 ${y}
      C 90 ${y - 96 - lift * 1.2}, 220 ${y - 92}, 360 ${y - 18}
      C 520 ${y + 66 + lift * 0.9}, 610 ${y + 74}, 760 ${y + 8}
      C 930 ${y - 68 - lift * 0.8}, 1050 ${y - 62}, 1280 ${y + 10}`;
  });

  cursorX = 50;
  cursorY = 50;

  @HostListener('window:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    const bounds = this.elementRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) {
      this.cursorX = 50;
      this.cursorY = 50;
      return;
    }

    this.cursorX = this.toPercent(x, bounds.width);
    this.cursorY = this.toPercent(y, bounds.height);
  }

  private toPercent(value: number, total: number): number {
    return Math.min(100, Math.max(0, (value / total) * 100));
  }
}
