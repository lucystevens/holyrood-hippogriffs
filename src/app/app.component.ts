import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('navbarToggler', { static: true }) navbarToggler: ElementRef;

  constructor(private router: Router) {}

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  isActive(route: string): boolean {
    return route === this.router.url;
  }

  getBrandText(): string {
    return window.innerWidth < 466? "HH"  : "Holyrood Hippogriffs";
  }
}
