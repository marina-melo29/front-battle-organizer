export function openPlayersEditingMode(target: HTMLElement): void {
  let iconsContainer = target.closest('.players-edit-icons') as HTMLElement;
  let confirmIcon = iconsContainer.querySelector('.confirm-players-editing') as HTMLElement;
  let cancelIcon = iconsContainer.querySelector('.cancel-players-editing') as HTMLElement;

  if (confirmIcon.getAttribute('hidden') !== null) {
    confirmIcon.removeAttribute('hidden');
    cancelIcon.removeAttribute('hidden');
    target?.closest('.edit-icon')?.setAttribute('hidden', '');
  }

  let cardContainer = target.closest('.card-container') as HTMLElement;

  _showEditingFields(cardContainer);
}

export function cancelPlayersEditing(target: HTMLElement): void {
  _hideEditingIcons(target);
  let cardContainer = target.closest('.card-container') as HTMLElement;
  _hideEditingFields(cardContainer);
}

export function confirmPlayersEditing(target: HTMLElement): void {
  _hideEditingIcons(target);
  let cardContainer = target.closest('.card-container') as HTMLElement;
  _hideEditingFields(cardContainer);
}

function _showEditingFields(target: HTMLElement): void {
  // labels
  let nameLabelElement = target.querySelector('.character-name') as HTMLElement;
  let classLabelElement = target.querySelector('.character-class') as HTMLElement;
  let bonusLabelElement = target.querySelector('.character-iniciative-bonus') as HTMLElement;

  // inputs
  let nameInputElement = target.querySelector('[name="character-name"]') as HTMLInputElement;
  let classInputElement = target.querySelector('[name="character-class"]') as HTMLInputElement;
  let bonusInputElement = target.querySelector('[name="character-iniciative-bonus"]') as HTMLInputElement;

  // hide labels
  nameLabelElement.setAttribute('hidden', '');
  classLabelElement.setAttribute('hidden', '');
  bonusLabelElement.setAttribute('hidden', '');

  // show inputs
  nameInputElement.setAttribute('type', 'text');
  classInputElement.setAttribute('type', 'text');
  bonusInputElement.setAttribute('type', 'number');
}

function _hideEditingFields(target: HTMLElement): void {
  // labels
  let nameLabelElement = target.querySelector('.character-name') as HTMLElement;
  let classLabelElement = target.querySelector('.character-class') as HTMLElement;
  let bonusLabelElement = target.querySelector('.character-iniciative-bonus') as HTMLElement;

  // inputs
  let nameInputElement = target.querySelector('[name="character-name"]') as HTMLInputElement;
  let classInputElement = target.querySelector('[name="character-class"]') as HTMLInputElement;
  let bonusInputElement = target.querySelector('[name="character-iniciative-bonus"]') as HTMLInputElement;

  // show labels
  nameLabelElement.removeAttribute('hidden');
  classLabelElement.removeAttribute('hidden');
  bonusLabelElement.removeAttribute('hidden');

  // hide inputs
  nameInputElement.setAttribute('type', 'hidden');
  classInputElement.setAttribute('type', 'hidden');
  bonusInputElement.setAttribute('type', 'hidden');
}

function _hideEditingIcons(target: HTMLElement): void {
  let iconsContainer = target.closest('.players-edit-icons') as HTMLElement;
  let confirmIcon = iconsContainer.querySelector('.confirm-players-editing') as HTMLElement;
  let cancelIcon = iconsContainer.querySelector('.cancel-players-editing') as HTMLElement;

  if (confirmIcon.getAttribute('hidden') === null) {
    confirmIcon.setAttribute('hidden', '');
    cancelIcon.setAttribute('hidden', '');
    iconsContainer?.querySelector('.edit-icon')?.removeAttribute('hidden');
  }
}