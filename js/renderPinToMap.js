'use strict';

function renderPinToMap(data) {
  var targetElement = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();

  data.forEach(function (item, index) {
    var options = {
      left: item.location.x,
      top: item.location.y,
      src: item.author.avatar
    };

    var pin = window.createPin(options);

    if (index === 0) {
      pin.setAttribute('tabindex', '0');
    }
    fragment.appendChild(pin);
  });

  targetElement.appendChild(fragment);
}

window.renderPinToMap = renderPinToMap;

