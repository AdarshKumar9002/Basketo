import {CAROUSEL_SLIDES_ELEMENTS} from './carousel-dom-elements.js';
import getSlideWidth from './get-slide-width.js';

class SetSlidesPosition {

    static updateSlidePositon() {        
        CAROUSEL_SLIDES_ELEMENTS.forEach((slide, index) => {
            SetSlidesPosition.slidesPosition(slide,index);
        });
    }

  static slidesPosition(slide, index) {
    const slideWidth = getSlideWidth();
    const slidePosition = `${slideWidth * index}px`;
    slide.style.left = slidePosition;
    return slide;
  }
}


export default SetSlidesPosition;
