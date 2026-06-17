import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  SolutionFeature
}
from '../../../../interfaces/data/solution-feature.interface';

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solution-card.html',
  styleUrl: './solution-card.css'
})
export class SolutionCard {

  @Input({ required: true })
  feature!: SolutionFeature;

}