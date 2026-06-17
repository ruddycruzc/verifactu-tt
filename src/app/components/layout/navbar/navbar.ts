import { Component } from '@angular/core';

import {
  NAVIGATION_ITEMS
} from '../../../data/company/navigation.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  readonly navigationItems =
    NAVIGATION_ITEMS;

}