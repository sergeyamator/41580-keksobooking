"use strict";

function generateNewDataPins() {
  var data = [];

  for (var i = 1; i < 8; i++) {
    var pin = {
      "author": {
        "avatar": 'img/avatars/user0' + i + '.png'
      },
      "offer": {
        "title": 'First',
        "address": 'Ukraine',
        "price": Math.round(getRandomArbitrary(MIN_PRICE, MAX_PRICE)),
        "type": 'house',
        "rooms": Math.round(getRandomArbitrary(MIN_ROOM, MAX_ROOM)),
        "guests": Math.round(getRandomArbitrary(MIN_GUESTS, MAX_GUESTS)),
        "checkin": '12:00',
        "checkout": '14:00',
        "features": features.slice(getRandomArbitrary(0, featuresLength)),
        "description": '',
        "photos": []
      },
      "location": {
        "x": getRandomArbitrary(300, 900),
        "y": getRandomArbitrary(100, 500)
      },
    };

    data.push(pin);
  }

  return data;
}