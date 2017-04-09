'use strict';

function generateNewDataPins() {
  var data = [];

  for (var i = 1; i < 8; i++) {
    var pin = {
      author: {
        avatar: 'img/avatars/user0' + i + '.png'
      },
      offer: {
        title: 'First',
        address: 'Ukraine',
        price: Math.round(window.UTILS.getRandomArbitrary(window.hotelOptions.MIN_PRICE, window.hotelOptions.MAX_PRICE)),
        type: 'house',
        rooms: Math.round(window.UTILS.getRandomArbitrary(window.hotelOptions.MIN_ROOM, window.hotelOptions.MAX_ROOM)),
        guests: Math.round(window.UTILS.getRandomArbitrary(window.hotelOptions.MIN_GUESTS, window.hotelOptions.MAX_GUESTS)),
        checkin: '12:00',
        checkout: '14:00',
        features: window.features.slice(window.UTILS.getRandomArbitrary(0, window.featuresLength)),
        description: '',
        photos: []
      },
      location: {
        x: window.UTILS.getRandomArbitrary(300, 900),
        y: window.UTILS.getRandomArbitrary(100, 500)
      },
    };

    data.push(pin);
  }

  return data;
}

window.generateNewDataPins = generateNewDataPins;

