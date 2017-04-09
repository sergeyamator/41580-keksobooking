"use strict";

function getTypeOfHouse(house) {
  if (house === 'flat') {
    return 'Квартира';
  }

  if (house === 'bungalo') {
    return 'Бунгало';
  }

  if (house === 'house') {
    return 'Дом';
  }
}

var element = elementToClone('#lodge-template', '.dialog__panel').cloneNode(true);

function setOfferDialog(data) {
  var dialogTitle = element.querySelector('.lodge__title');
  var dialogAddress = element.querySelector('.lodge__address');
  var dialogPrice = element.querySelector('.lodge__price');
  var dialogType = element.querySelector('.lodge__type');
  var dialogRoomsAndGuests = element.querySelector('.lodge__rooms-and-guests');
  var dialogCheckinTime = element.querySelector('.lodge__checkin-time');
  var dialogFeatures = element.querySelector('.lodge__features');
  var dialogDescription = element.querySelector('.lodge__description');
  var avatar = document.querySelector('.dialog__title img');

  // Add text content to the offer dialog
  dialogTitle.textContent = data.offer.title;
  dialogAddress.textContent = data.offer.address;
  dialogPrice.textContent = data.offer.price + '₽/ночь';
  dialogType.textContent = getTypeOfHouse(data.offer.type);
  dialogRoomsAndGuests.textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
  dialogCheckinTime.dialogCheckinTime = 'Заезд после ' + data.offer.checkin + ', выезд до' + data.offer.checkout;

  // Create features
  var featureDocumentFragment = document.createDocumentFragment();

  data.offer.features.forEach(function(feature) {
    var span = document.createElement('span');
    span.className='feature__image feature__image--' + feature;
    featureDocumentFragment.appendChild(span);
  });

  dialogFeatures.innerHTML = '';
  dialogFeatures.appendChild(featureDocumentFragment);
  avatar.src = data.author.avatar;
  dialogDescription.textContent = data.offer.description;

  return element;
}