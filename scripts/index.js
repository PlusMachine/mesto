//imports
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './initialCards.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

//set settings
const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//set constants
const popupProfileEdit = document.querySelector(".popup-edit");
const popupAddNewCard = document.querySelector(".popup-add");
const popupPicture = document.querySelector(".popup-picture");
const buttonOpenPopupEditElement = document.querySelector(".profile__edit-button");
const buttonOpenPopupAddNewCard = document.querySelector(".profile__add-button");
const formEditProfile = popupProfileEdit.querySelector(".popup__form-edit");
const formAddNewCard = popupAddNewCard.querySelector(".popup__form-add");
const inputNamePopupEditProfileElement = formEditProfile.querySelector(".popup__form-field_input_name");
const inputJobPopupEditProfileElement = formEditProfile.querySelector(".popup__form-field_input_job");
const inputTitlePopupAddNewCardElement = formAddNewCard.querySelector(".popup__form-field_input_title");
const inputLinkPopupAddNewCardElement = formAddNewCard.querySelector(".popup__form-field_input_link");
const nameProfileElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__profession");
const elementTemplate = document.querySelector(".template-element").content;
const listElement = document.querySelector(".elements__list");

const profilePopup = new Popup(popupProfileEdit);
profilePopup.setEventListeners();

const picturePopup = new PopupWithImage(popupPicture);
picturePopup.setEventListeners();

const addNewCardPopup = new Popup(popupAddNewCard);
addNewCardPopup.setEventListeners();

const addCardFormValidator = new FormValidator(settings, formAddNewCard);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(settings, formEditProfile);
editProfileFormValidator.enableValidation();


function handleFormSubmitPopupEditProfile(evt) {
  evt.preventDefault();
  nameProfileElement.textContent = inputNamePopupEditProfileElement.value;
  jobElement.textContent = inputJobPopupEditProfileElement.value;

  profilePopup.close();
};

buttonOpenPopupEditElement.addEventListener("click", () => {
  inputNamePopupEditProfileElement.value = nameProfileElement.textContent;
  inputJobPopupEditProfileElement.value = jobElement.textContent;

  profilePopup.open();
});

buttonOpenPopupAddNewCard.addEventListener("click", () => {
  addNewCardPopup.open();
  addCardFormValidator.disableButton();
});

formEditProfile.addEventListener("submit", handleFormSubmitPopupEditProfile);
formAddNewCard.addEventListener("submit", handleFormAddCard);

function renderCard(item, container) {
  const card = new Card(item, elementTemplate, (name, link) => {
    picturePopup.open(item)
  });
  const cardElement = card.getCard();
  section.addItem(cardElement);
}

const section = new Section({ items: initialCards, renderer: renderCard }, ".elements__list");
section.renderItems();

function handleFormAddCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputTitlePopupAddNewCardElement.value,
    link: inputLinkPopupAddNewCardElement.value
  };
  renderCard(newCard, listElement);
  addNewCardPopup.close();
  formAddNewCard.reset();
}

