import { Component } from '@angular/core';

import {
  SOLUTION_FEATURES
}
from '../../../data/verifactu/solution-features.data';

import {
  ProjectCard
}
from '../../ui/cards/project-card/project-card';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-solution-section',
  standalone: true,
  imports: [ProjectCard, ScrollRevealDirective],
  templateUrl: './solution-section.html',
  styleUrl: './solution-section.css'
})
export class SolutionSection {

  readonly features =
    SOLUTION_FEATURES;

}
