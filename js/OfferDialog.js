"use strict";

function renderCurrentOfferDialog(data) {
  var offerDialog = document.querySelector('#offer-dialog');
  var oldDialogPanel = document.querySelector('.dialog__panel');
  var newDialogPanel = setOfferDialog(data);

  offerDialog.replaceChild(newDialogPanel, oldDialogPanel);
}

function show(dialog) {
  dialog.classList.remove('is-hidden');

  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === UTILS.keyCodes.ESC_KEY) {
      hide(dialog);
    }
  })
}

function hide(dialog) {
  dialog.classList.add('is-hidden');
}

window.offerDialog = {
  renderCurrentOfferDialog: renderCurrentOfferDialog,
  show: show,
  hide: hide
};