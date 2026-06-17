import { Component, Input, booleanAttribute } from '@angular/core';

import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() image = '';
  @Input() mediaType: 'image' | 'video' = 'image';
  @Input() imageAlt = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input() buttonLabel = 'Ver detalles';
  @Input() buttonRouterLink: string | unknown[] | null = null;
  @Input() buttonHref: string | null = null;
  @Input() buttonTarget: string | null = null;
  @Input({ transform: booleanAttribute }) showButton = true;
}
