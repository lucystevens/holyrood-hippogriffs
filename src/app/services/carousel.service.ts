import { Injectable } from '@angular/core';
import { CarouselImage } from '../domain/data-definitions';
import { CAROUSEL_IMAGES } from '../domain/carousel-images';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getCarouselImages(mobile: boolean = false): CarouselImage[]{
    let images = [];
    for(let image of CAROUSEL_IMAGES){
      let cloned = this.cloneImage(image);
      cloned.src = this.getImageUrl(cloned.src, mobile);
      images.push(cloned);
    }
    return images;
  }

  getImageUrl(src: string, mobile: boolean): string {
    let suffix = mobile? "-sm" : "-lg";
    return "/assets/images/carousel/" + src + suffix + ".jpg";
  }

  cloneImage(image: CarouselImage): CarouselImage{
    let clonedImage = new CarouselImage;
    Object.assign(clonedImage, image);
    return clonedImage;
  }
}
