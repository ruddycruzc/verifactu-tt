import { Component } from '@angular/core';

import {
  SOLUTION_FEATURES
}
from '../../../data/verifactu/solution-features.data';

import {
  SolutionCard
}
from '../../ui/cards/solution-card/solution-card';

@Component({
  selector: 'app-solution-section',
  standalone: true,
  imports: [SolutionCard],
  templateUrl: './solution-section.html',
  styleUrl: './solution-section.css'
})
export class SolutionSection {

  readonly features =
    SOLUTION_FEATURES;

}