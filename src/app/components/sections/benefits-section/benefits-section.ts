import { Component } from '@angular/core';

import { BENEFITS }
from '../../../data/verifactu/benefits.data';

import { BenefitCard }
from '../../ui/cards/benefit-card/benefit-card';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [BenefitCard],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.css'
})
export class BenefitsSection {

  readonly benefits = BENEFITS;

}