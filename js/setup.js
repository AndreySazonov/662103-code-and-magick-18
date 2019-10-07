'use strict';

var WIZARD_NAME = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var randomName = [];


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: '',
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)]
  },
  {
    name: '',
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)]
  },
  {
    name: '',
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)]
  },
  {
    name: '',
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)]
  }
];

for (var i = 0; i < wizards.length; i++) {
  randomName.push(WIZARD_NAME[Math.floor(Math.random() * WIZARD_NAME.length)] + ' ' + WIZARD_SURNAME[Math.floor(Math.random() * WIZARD_SURNAME.length)]);
  wizards[i].name = randomName[i];
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
