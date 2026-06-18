import { Component } from '@angular/core';

import {
  ABOUT_VERIFACTU_CONTENT
} from '../../../data/verifactu/about-verifactu.data';
import { InfoLeftVisual } from '../../../interfaces/data/info-left-visual.interface';
import { InfoLeft } from '../../ui/cards/info-left/info-left';

@Component({
  selector: 'app-about-verifactu-section',
  standalone: true,
  imports: [InfoLeft],
  templateUrl: './about-verifactu-section.html',
  styleUrl: './about-verifactu-section.css'
})
export class AboutVerifactuSection {
  readonly content =
    ABOUT_VERIFACTU_CONTENT;

  readonly visuals: InfoLeftVisual[] = [
    {
      type: 'image',
      src: this.content.imageOne,
      alt: this.content.highlightedWord
    },
    {
      type: 'image',
      src: this.content.imageTwo,
      alt: this.content.highlightedWord
    }
  ];
}
