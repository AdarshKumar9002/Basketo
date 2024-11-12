/**
 * Toggles the class from the element.
 *
 * @param {HTMLElement} element - The Element in which class will toggle.
 * @param {string} className - The class name that will be toggled.
 * @returns {void}
 */
const toggleClassName = (element, className) => {
  element.classList.toggle(className);
};

export default toggleClassName;
