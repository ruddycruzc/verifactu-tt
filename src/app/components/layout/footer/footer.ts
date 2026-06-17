import { Component } from '@angular/core';

import {
  FOOTER_LINKS
} from '../../../data/company/footer.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  readonly links =
    FOOTER_LINKS;

  readonly currentYear =
    new Date().getFullYear();

}