import { Component } from '@angular/core';

import { Navbar } from '../../components/layout/navbar/navbar';
import { Footer } from '../../components/layout/footer/footer';
import { HeroSection } from '../../components/sections/hero-section/hero-section';
import { AboutVerifactuSection } from '../../components/sections/about-verifactu-section/about-verifactu-section';
import { BenefitsSection } from '../../components/sections/benefits-section/benefits-section';
import { SolutionSection } from '../../components/sections/solution-section/solution-section';
import { ContactSection } from '../../components/sections/contact-section/contact-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    HeroSection,
    AboutVerifactuSection,
    BenefitsSection,
    SolutionSection,
    ContactSection,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
