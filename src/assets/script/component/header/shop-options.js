import toggleClassName from '../../utility/toggleMenu.js';

const toggleShopMenu = () => {
  const SHOP_OPTION_ELEMENT = document.querySelector('.header__shop-options');
  toggleClassName(SHOP_OPTION_ELEMENT, 'visible');
};

export default toggleShopMenu;
