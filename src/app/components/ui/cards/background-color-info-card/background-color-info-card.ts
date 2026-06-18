import { Component, Input } from '@angular/core';

import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

export type BackgroundColorInfoCardVariant = 'small' | 'large';

@Component({
  selector: 'app-background-color-info-card',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './background-color-info-card.html',
  styleUrl: './background-color-info-card.css',
})
export class BackgroundColorInfoCard {
  @Input() variant: BackgroundColorInfoCardVariant = 'small';
  @Input() title = '';
  @Input() description = '';
  @Input() buttonLabel = '';
  @Input() buttonLink = '/contact';
  @Input() tone: 'primary' | 'dark' = 'primary';
  @Input() emphasis = '';

  get titlePrefix(): string {
    return this.emphasis ? this.title.split(this.emphasis)[0] ?? '' : this.title;
  }

  get titleSuffix(): string {
    return this.emphasis ? this.title.split(this.emphasis)[1] ?? '' : '';
  }
}
