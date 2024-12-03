import {CAROUSEL_SLIDES_ELEMENTS} from './carousel-dom-elements.js';

const getSlideWidth = () =>  CAROUSEL_SLIDES_ELEMENTS[0].getBoundingClientRect().width;

export default getSlideWidth;