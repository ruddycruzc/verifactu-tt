import { Component } from '@angular/core';
import { FAQ_CONTENT } from '../../../data/faq/faq-content.data';


@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css'
})
export class FaqSection {
readonly faqContent = FAQ_CONTENT;
}