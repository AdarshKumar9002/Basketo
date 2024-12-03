const CAROUSEL_ELEMENT = document.querySelector('.carousel');
const CAROUSEL_TRACK_ELEMENT = CAROUSEL_ELEMENT.querySelector('.carousel__track');
const CAROUSEL_SLIDES_ELEMENTS = Array.from(CAROUSEL_TRACK_ELEMENT.children);
const CAROUSEL_PREV_BTN_ELEMENT = CAROUSEL_ELEMENT.querySelector('.carousel__prev-btn');
const CAROUSEL_NEXT_BTN_ELEMENT = CAROUSEL_ELEMENT.querySelector('.carousel__next-btn');
// const CAROUSEL_DOT_NAV_ELEMENT = CAROUSEL_ELEMENT.querySelector('.carousel__dot-indicator');
const CAROUSEL_DOT_BTN_ELEMENTS = CAROUSEL_ELEMENT.querySelectorAll('.carousel__indicator-btn');



export  {
    CAROUSEL_ELEMENT, 
    CAROUSEL_TRACK_ELEMENT,
    CAROUSEL_SLIDES_ELEMENTS,
    CAROUSEL_PREV_BTN_ELEMENT,
    CAROUSEL_NEXT_BTN_ELEMENT,
    CAROUSEL_DOT_BTN_ELEMENTS
};