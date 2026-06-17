import { Component } from '@angular/core';

import {
  ABOUT_VERIFACTU_CONTENT
} from '../../../data/verifactu/about-verifactu.data';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-about-verifactu-section',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './about-verifactu-section.html',
  styleUrl: './about-verifactu-section.css'
})
export class AboutVerifactuSection {

  readonly content =
    ABOUT_VERIFACTU_CONTENT;

}