import toggleClassName from '../../utility/toggleMenu.js';

const toggleMainNav = () => {
  const NAV_MENU_ELEMENT = document.querySelector('.header__nav');
  console.log(NAV_MENU_ELEMENT);
  toggleClassName(NAV_MENU_ELEMENT, 'visible');
};

export default toggleMainNav;
