"use strict";

function isTemplateSupported() {
  return 'content' in document.createElement('template');
}

/**
 *
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

window.utils = {
  elementToClone: elementToClone
};