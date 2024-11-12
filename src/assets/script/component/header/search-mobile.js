import toggleClassName from '../../utility/toggleMenu.js';

// class ToggleSearchBox {
//   constructor() {
//     this.SEARCH_BOX_ELEMENT = document.querySelector('.header__search-box');
//     this.toggleSearch();
//   }

//   openSearchBox() {
//     toggleClassName(this.SEARCH_BOX_ELEMENT, 'header__mobile-search-box');
//   }

//   closeSearchBox() {
//     toggleClassName(this.SEARCH_BOX_ELEMENT, 'header__mobile-search-box');
//   }

//   toggleSearch() {
//     this.openSearchBox();
//     this.closeSearchBox();
//   }
// }

const toggleSearchBox = () => {
  const SEARCH_BOX_ELEMENT = document.querySelector('.header__search-box');
  toggleClassName(SEARCH_BOX_ELEMENT, 'header__mobile-search-box');
};

export default toggleSearchBox;
