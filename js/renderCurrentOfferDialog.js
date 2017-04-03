"use strict";

function renderCurrentOfferDialog(data) {
  var offerDialog = document.querySelector('#offer-dialog');
  var oldDialogPanel = document.querySelector('.dialog__panel');
  var newDialogPanel = setOfferDialog(data);

  offerDialog.replaceChild(newDialogPanel, oldDialogPanel);
}