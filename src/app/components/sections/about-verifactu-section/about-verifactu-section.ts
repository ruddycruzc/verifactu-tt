import { Component } from '@angular/core';

import {
  ABOUT_VERIFACTU_CONTENT
} from '../../../data/verifactu/about-verifactu.data';
import { AboutVerifactuInfoBlock } from '../../info-blocks/about-verifactu-info-block/about-verifactu-info-block';

@Component({
  selector: 'app-about-verifactu-section',
  standalone: true,
  imports: [AboutVerifactuInfoBlock],
  templateUrl: './about-verifactu-section.html',
  styleUrl: './about-verifactu-section.css'
})
export class AboutVerifactuSection {
  readonly content =
    ABOUT_VERIFACTU_CONTENT;
}
