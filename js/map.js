"use strict";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var MIN_PRICE = 1000;
var MAX_PRICE = 1000000;
var MIN_ROOM = 1;
var MAX_ROOM = 5;
var MIN_GUESTS = 1;
var MAX_GUESTS = 6;

var features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var featuresLength = features.length;

var data = generateNewDataPins();

renderPinToMap(data);
renderCurrentOfferDialog(data[0]);

