import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('navbarToggler', { static: true }) navbarToggler: ElementRef;

  brandText: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.brandText = this.getBrandText();
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.brandText = this.getBrandText();
  }
}
