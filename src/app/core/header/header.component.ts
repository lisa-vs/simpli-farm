import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() {}

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
