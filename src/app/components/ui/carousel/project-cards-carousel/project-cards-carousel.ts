import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { ProjectCard } from '../../cards/project-card/project-card';
import { ProjectCardItem } from '../../../../interfaces/data/project-card-item.interface';

@Component({
  selector: 'app-project-cards-carousel',
  standalone: true,
  imports: [CommonModule, AppButtonComponent, ProjectCard],
  templateUrl: './project-cards-carousel.html',
  styleUrl: './project-cards-carousel.css',
})
export class ProjectCardsCarousel {
  @Input() title = '';
  @Input() eyebrow = '';
  @Input() cards: ProjectCardItem[] = [];
  @Input() showCardButton = false;

  @ViewChild('viewport', { static: true })
  private viewport?: ElementRef<HTMLElement>;

  private isDragging = false;
  private dragStartX = 0;
  private scrollStart = 0;

  prev(): void {
    this.scroll(-1);
  }

  next(): void {
    this.scroll(1);
  }

  startDrag(event: PointerEvent): void {
    if (!this.viewport) {
      return;
    }

    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.scrollStart = this.viewport.nativeElement.scrollLeft;
    this.viewport.nativeElement.setPointerCapture(event.pointerId);
  }

  drag(event: PointerEvent): void {
    if (!this.isDragging || !this.viewport) {
      return;
    }

    this.viewport.nativeElement.scrollLeft = this.scrollStart - (event.clientX - this.dragStartX);
  }

  endDrag(event: PointerEvent): void {
    if (!this.viewport) {
      return;
    }

    this.isDragging = false;
    this.viewport.nativeElement.releasePointerCapture(event.pointerId);
  }

  private getSlideStep(): number {
    const viewport = this.viewport?.nativeElement;
    const slide = viewport?.querySelector<HTMLElement>('.project-cards-carousel__slide');

    if (!viewport || !slide) {
      return 360;
    }

    const track = viewport.querySelector<HTMLElement>('.project-cards-carousel__track');
    const styles = getComputedStyle(track || viewport);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;

    return slide.getBoundingClientRect().width + gap;
  }

  private scroll(direction: 1 | -1): void {
    if (!this.viewport) {
      return;
    }

    this.viewport.nativeElement.scrollBy({
      left: this.getSlideStep() * direction,
      behavior: 'smooth',
    });
  }
}
