import { Component } from '@angular/core';

import { BENEFITS }
from '../../../data/verifactu/benefits.data';

import {
  ProjectCardItem,
  ProjectCardsCarousel
} from '../../ui/carousel/project-cards-carousel/project-cards-carousel';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [ProjectCardsCarousel],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.css'
})
export class BenefitsSection {

  readonly benefits: ProjectCardItem[] = BENEFITS.map((benefit) => ({
    title: benefit.title,
    description: benefit.description,
    image: benefit.image,
    imageAlt: benefit.title,
    mediaType: 'image'
  }));

}
