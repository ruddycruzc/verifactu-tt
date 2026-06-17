import { Component, Input } from '@angular/core';

import { AboutVerifactuContent } from '../../../interfaces/data/about-verifactu-content.interface';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-about-verifactu-info-block',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './about-verifactu-info-block.html',
  styleUrl: './about-verifactu-info-block.css',
})
export class AboutVerifactuInfoBlock {
  @Input({ required: true }) content!: AboutVerifactuContent;
}
