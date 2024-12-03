import {
  CAROUSEL_ELEMENT,
  CAROUSEL_TRACK_ELEMENT,
} from './carousel-dom-elements.js';
import hideArrowNav from './hide-arrow-nav.js';
import MoveToTargetSlide from './move-to-target-slide.js';
import UpdateCarouselIndicator from './update-carousel.indicator.js';

class CarouselNavigation {
  

  static moveToNextSlide() {
    const CURRENT_SLIDE = CAROUSEL_ELEMENT.querySelector(
      '.carousel__slide--current-slide',
    );
    const NEXT_SLIDE = CURRENT_SLIDE.nextElementSibling;
    if(!NEXT_SLIDE) return;
    MoveToTargetSlide.moveSlide(
      CAROUSEL_TRACK_ELEMENT,
      CURRENT_SLIDE,
      NEXT_SLIDE,
    );
    UpdateCarouselIndicator.updateNextDot();
    hideArrowNav();
  }

  static moveToPrevSlide() {
    const CURRENT_SLIDE = CAROUSEL_ELEMENT.querySelector(
      '.carousel__slide--current-slide',
    );
    const PREVIOUS_SLIDE = CURRENT_SLIDE.previousElementSibling;
    if(!PREVIOUS_SLIDE) return;
    MoveToTargetSlide.moveSlide(
      CAROUSEL_TRACK_ELEMENT,
      CURRENT_SLIDE,
      PREVIOUS_SLIDE,
    );
    UpdateCarouselIndicator.updatePreviousDot();
    hideArrowNav();
  }
}

export default CarouselNavigation;
