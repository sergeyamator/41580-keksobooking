"use strict";

function renderPinToMap(data) {
  var targetElement = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();

  data.forEach(function(item) {
    var options = {
      left: item.location.x,
      top: item.location.y,
      src: item.author.avatar
    };

    var pin = createPin(options);
    fragment.appendChild(pin);
  });

  targetElement.appendChild(fragment);
}