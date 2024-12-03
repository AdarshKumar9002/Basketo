import {
  CAROUSEL_PREV_BTN_ELEMENT,
  CAROUSEL_NEXT_BTN_ELEMENT,
  CAROUSEL_DOT_BTN_ELEMENTS,
  CAROUSEL_SLIDES_ELEMENTS,
} from './carousel-dom-elements.js';
import carouselDotNav from './carousel-dot-nav.js';
import CarouselNavigation from './carousel-navigation.js';
import DesktopSwipeControl from './desktop-swipe-controls.js';
import hideArrowNav from './hide-arrow-nav.js';
import MobileSwipeControl from './mobile-swipe-control.js';
import SetSlidesPosition from './set-slides-position.js';

class Carousel {
  constructor() {
    this.mobileSwipeControls = new MobileSwipeControl();
    this.desktopSwipeControls = new DesktopSwipeControl();
    SetSlidesPosition.updateSlidePositon();
    hideArrowNav();
  }

  // change the slide as per fixed time
  autoChangeSlides() {
    const autoSlideCahngeDuration = 2000;
    setInterval(() => {
      CarouselNavigation.moveToNextSlide();
    }, autoSlideCahngeDuration);
  }

  eventListeners() {

    // Previous slide button eventlisteners
    CAROUSEL_PREV_BTN_ELEMENT.addEventListener('click', () => {
      CarouselNavigation.moveToPrevSlide();
    });

    // Next slide button eventlisteners
    CAROUSEL_NEXT_BTN_ELEMENT.addEventListener('click', () => {
      CarouselNavigation.moveToNextSlide();
    });

    // Dot Nav Eventlisteners
    CAROUSEL_DOT_BTN_ELEMENTS.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        carouselDotNav(event);
      });
    });

    // Swipe Eventlisteners
    CAROUSEL_SLIDES_ELEMENTS.forEach((slide) => {
      slide.addEventListener(
        'touchstart',
        this.mobileSwipeControls.getOriginalPosition,
        { passive: true },
      );
      slide.addEventListener(
        'touchmove',
        this.mobileSwipeControls.getCurrentPosition,
        { passive: true },
      );
      slide.addEventListener('touchend', this.mobileSwipeControls.moveSlide);
      slide.addEventListener(
        'mousedown',
        this.desktopSwipeControls.getOriginalPosition,
      );
      slide.addEventListener(
        'mousemove',
        this.desktopSwipeControls.getCurrentPosition,
      );
      slide.addEventListener('mouseup', this.desktopSwipeControls.moveSlide);
      slide.addEventListener('mouseleave', this.desktopSwipeControls.moveSlide);
    });
  }
}

export default Carousel;
