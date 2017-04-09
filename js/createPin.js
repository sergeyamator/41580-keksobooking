"use strict";

var PIN_WIDTH = 56;
var PIN_HEIGHT = 75;

function createPin(options) {
  var element = document.createElement('div');
  var picture = document.createElement('img');

  element.className = 'pin';
  element.style.left = options.left - (PIN_WIDTH / 2) + 'px';
  element.style.top = options.top - PIN_HEIGHT + 'px';
  element.setAttribute('tabindex', '0');

  picture.src = options.src;
  picture.className = 'rounded';
  picture.setAttribute('width', '40');
  picture.setAttribute('height', '40');

  element.appendChild(picture);
  return element;
}