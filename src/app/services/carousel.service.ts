import { Injectable } from '@angular/core';
import { CarouselImage } from '../domain/data-definitions';
import { CAROUSEL_IMAGES } from '../domain/carousel-images';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getCarouselImages(): CarouselImage[]{
    let images = [];
    for(let image of CAROUSEL_IMAGES){
      let cloned = this.cloneImage(image);
      cloned.src = this.getImageUrl(cloned.src);
      images.push(cloned);
    }
    return images;
  }

  getImageUrl(src: string): string {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let size = "-sm";
    if (width > 992) {
      size = "-lg";
    }
    else if(width > 466){
      size = "-md";
    }

    let orientation = width > height? "-ls" : "-pt";

    return "/assets/images/carousel/" + src + orientation + size + ".jpg";
  }

  cloneImage(image: CarouselImage): CarouselImage{
    let clonedImage = new CarouselImage;
    Object.assign(clonedImage, image);
    return clonedImage;
  }
}
