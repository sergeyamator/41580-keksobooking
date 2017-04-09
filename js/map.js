"use strict";

var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var featuresLength = features.length;

var data = generateNewDataPins();

var pinContainer = document.querySelector('.tokyo__pin-map');
var dialog = document.querySelector('.dialog');
var dialogCloseButton = document.querySelector('.dialog__close');

pinContainer.addEventListener('click', onPinClick);
document.addEventListener('keydown', onPinKeyDown);
dialogCloseButton.addEventListener('click', closeDialog);

renderPinToMap(data);
renderCurrentOfferDialog(data[0]);

function isNotPin(target) {
  if (!target) {
    return true;
  }
  var pin = target.closest('.pin');

  return !pin
    || pin.classList.contains('pin--active')
    || pin.classList.contains('pin__main')
}

function onPinClick(evt) {
  var pin;

  if (isNotPin(evt.target)) {
    return;
  }

  pin = evt.target.closest('.pin');
  showDialogWithActivePinData(pin);
}

function showDialogWithActivePinData(pin) {
  var pinIndex = getIndex(pinContainer, pin);

  offerDialog.renderCurrentOfferDialog(data[pinIndex - 2]);
  offerDialog.show(dialog);

  setActivePin(pin);
}

function setActivePin(pin) {
  removeAllActiveClass('pin--active');
  pin.classList.add('pin--active');
}

function removeAllActiveClass(className) {
  var allActiveElements = document.querySelectorAll('.' + className);

  for (var i = 0; i < allActiveElements.length; i++) {
    if (allActiveElements[i].classList.contains(className)) {
      allActiveElements[i].classList.remove(className)
    }
  }
}

function onPinKeyDown(evt) {
  var pin = null;

  if (isNotPin(evt.target)) {
    return;
  }
  pin = evt.target.closest('.pin');

  if (evt.keyCode !== UTILS.keyCodes.ENTER_KEY) {
    return
  }

  showDialogWithActivePinData(pin);
  removeAllActiveClass('pin--active');
}

function closeDialog(e) {
  e.preventDefault();

  dialog.classList.add('is-hidden');
  showDialogWithActivePinData(document.querySelectorAll('pin--active'));
}
