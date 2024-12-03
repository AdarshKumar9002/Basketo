import {
  CAROUSEL_NEXT_BTN_ELEMENT,
  CAROUSEL_PREV_BTN_ELEMENT,
  CAROUSEL_SLIDES_ELEMENTS,
} from './carousel-dom-elements';

const hideArrowNav = () => {
  const firstSlide = 0;
  const lastSlide = CAROUSEL_SLIDES_ELEMENTS.length - 1;

  const CURRENT_SLIDE = document.querySelector(
    '.carousel__slide--current-slide',
  );

  const index = CAROUSEL_SLIDES_ELEMENTS.indexOf(CURRENT_SLIDE);

  if (index === firstSlide) {
    CAROUSEL_PREV_BTN_ELEMENT.classList.add('hidden');
    return;
  }
  if (index === lastSlide) {
    CAROUSEL_NEXT_BTN_ELEMENT.classList.add('hidden');
    return;
  } 
  CAROUSEL_PREV_BTN_ELEMENT.classList.remove('hidden');
  CAROUSEL_NEXT_BTN_ELEMENT.classList.remove('hidden');
};

export default hideArrowNav;
