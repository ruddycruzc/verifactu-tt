import { Component, Input } from '@angular/core';

import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { BackgroundColorInfoCard } from '../background-color-info-card/background-color-info-card';

@Component({
  selector: 'app-info-left',
  standalone: true,
  imports: [
    AppButtonComponent,
    BackgroundColorInfoCard
  ],
  templateUrl: './info-left.html',
  styleUrl: './info-left.css',
})
export class InfoLeft {
  @Input() title = '';
  @Input() paragraphs: string[] = [];
  @Input() buttonLabel = '';
  @Input() buttonLink = '/about';
  @Input() image = '';
  @Input() imageAlt = '';
  @Input() cardTitle = '';
  @Input() cardEmphasis = '';
  @Input() cardButtonLabel = '';
  @Input() cardButtonLink = '/contact';
}
