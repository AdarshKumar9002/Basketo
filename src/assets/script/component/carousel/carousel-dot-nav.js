import { CAROUSEL_DOT_BTN_ELEMENTS, CAROUSEL_ELEMENT, CAROUSEL_SLIDES_ELEMENTS, CAROUSEL_TRACK_ELEMENT} from "./carousel-dom-elements.js";
import hideArrowNav from "./hide-arrow-nav.js";
import MoveToTargetSlide from "./move-to-target-slide.js";
import UpdateCarouselIndicator from "./update-carousel.indicator.js";

const carouselDotNav = (event) => {

    const targetDot = event.target.closest('.carousel__indicator-btn');

    const CURRENT_ACTIVE_DOT = document.querySelector(
        '.carousel__indicator-btn--active',
      );

    const index = Array.from(CAROUSEL_DOT_BTN_ELEMENTS).indexOf(targetDot); 

    const CURRENT_SLIDE = CAROUSEL_ELEMENT.querySelector('.carousel__slide--current-slide');
    const TARGET_SLIDE = CAROUSEL_SLIDES_ELEMENTS[index];
    MoveToTargetSlide.moveSlide(CAROUSEL_TRACK_ELEMENT, CURRENT_SLIDE, TARGET_SLIDE);
    UpdateCarouselIndicator.updateDot(CURRENT_ACTIVE_DOT, targetDot);
    hideArrowNav();

};

export default carouselDotNav;