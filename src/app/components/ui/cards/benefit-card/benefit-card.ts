import { Component, Input } from '@angular/core';

import { Benefit }
from '../../../../interfaces/data/benefit.interface';

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  imports: [],
  templateUrl: './benefit-card.html',
  styleUrl: './benefit-card.css'
})
export class BenefitCard {

  @Input({ required: true })
  benefit!: Benefit;

}