import { Component, Input } from '@angular/core';

import { InfoLeftVisual } from '../../../../interfaces/data/info-left-visual.interface';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

@Component({
  selector: 'app-info-left',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './info-left.html',
  styleUrl: './info-left.css',
})
export class InfoLeft {
  @Input() title = '';
  @Input() highlightedWord = '';
  @Input() description = '';
  @Input() buttonLabel = '';
  @Input() buttonLink = '#contacto';
  @Input() visuals: InfoLeftVisual[] = [];
}
