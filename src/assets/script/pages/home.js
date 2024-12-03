import '../../style/css/pages/home.css';

// JS Imports
import Carousel from '../component/carousel/carousel.js';
import toggleSearchBox from '../component/header/search-mobile.js';

// Class Instances
const carousel = new Carousel();


/* ============ Header ============ */

const MOBILE_MENU_BTN_ELEMENT = document.getElementById('menu-btn');
const SHOP_OPTION_BTN_ELEMENT = document.getElementById('shop-options-btn');
const SEARCH_BOX_MOBILE_BTN_ELEMENT =
  document.querySelectorAll('.mobile-search-btn');

MOBILE_MENU_BTN_ELEMENT.addEventListener('click', () => {
  import('../component/header/mobile-menu-toggle.js').then((module) => {
    module.default();
  });
});

SHOP_OPTION_BTN_ELEMENT.addEventListener('click', () => {
  import('../component/header/shop-options.js').then((module) => {
    module.default();
  });
});

const toggleSearch = () => {
  SEARCH_BOX_MOBILE_BTN_ELEMENT.forEach((btn) => {
    btn.addEventListener('click', toggleSearchBox);
  });
};

toggleSearch();


/* ============ Carousel ============ */

document.addEventListener('DOMContentLoaded', carousel.eventListeners.bind(carousel));
document.addEventListener('DOMContentLoaded', carousel.autoChangeSlides);
