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
    this.scroll(-380);
  }

  next(): void {
    this.scroll(380);
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

  private scroll(amount: number): void {
    this.viewport?.nativeElement.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  }
}
