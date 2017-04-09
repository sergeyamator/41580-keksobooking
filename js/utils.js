"use strict";

/**
 * Returns random number from min and max diapason
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Checks, does browser support html5 tag template
 * @returns {boolean}
 */
function isTemplateSupported() {
  return 'content' in document.createElement('template');
}

/**
 * Returns html template
 * @param {String} templateSelector
 * @param {String} elementSelector
 * @returns {Element}
 */
function elementToClone(templateSelector, elementSelector) {
  var template = document.querySelector(templateSelector);

  return isTemplateSupported()
    ? template.content.querySelector(elementSelector)
    : template.querySelector(elementSelector);
}

/**
 * Return index of the element
 * @param {Node} parent
 * @param {Node} child
 * @returns {Number}
 */
function getIndex(parent, child) {
 return Array.prototype.indexOf.call(parent.childNodes, child) - 1;
}

window.UTILS = {
  getRandomArbitrary: getRandomArbitrary,
  isTemplateSupported: isTemplateSupported,
  elementToClone: elementToClone,
  getIndex: getIndex,
  keyCodes: {
    'ESC_KEY': 27,
    'ENTER_KEY': 13,
  }
};