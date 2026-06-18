import { Component, Input } from '@angular/core';

import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

@Component({
  selector: 'app-hero-content',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './hero-content.html',
  styleUrl: './hero-content.css'
})
export class HeroContentComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) subtitle = '';
  @Input() highlightedWord = '';
  @Input() primaryButton = '';
  @Input() secondaryButton = '';
}
