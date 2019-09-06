import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CarouselService } from 'src/app/services/carousel.service';
import { CarouselImage } from 'src/app/domain/data-definitions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  images: CarouselImage[];

  constructor(
    private router: Router,
    private carouselService: CarouselService
    ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

    let mobile = window.innerWidth < 768;
    this.images = this.carouselService.getCarouselImages(mobile);
  }

}
