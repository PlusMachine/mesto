import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './initialCards.js';
import Section from './Section.js';

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const popupProfileEdit = document.querySelector(".popup-edit");
const popupAddNewCard = document.querySelector(".popup-add");
const popupPicture = document.querySelector(".popup-picture");
const popupProfileCloseButtonElement = popupProfileEdit.querySelector(".popup__close-button");
const popupAddNewCardCloseButtonElement = popupAddNewCard.querySelector(".popup__close-button");
const popupPictureCloseButtonElement = popupPicture.querySelector(".popup__close-button");
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


const openPopup = function (popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByPressEsc);
};


const closePopup = function (popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByPressEsc);
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup(event.target);
};

const closePopupByPressEsc = function (event) {
  if (event.key === 'Escape') {
    const currentPopup = document.querySelector(".popup_is-opened");
    closePopup(currentPopup);
  }
};

function handleFormSubmitPopupEditProfile(evt) {
  evt.preventDefault();
  nameProfileElement.textContent = inputNamePopupEditProfileElement.value;
  jobElement.textContent = inputJobPopupEditProfileElement.value;
  closePopup(popupProfileEdit);
};


function openPicture(element) {
  popupPicture.querySelector(".popup__img").src = element.link;
  popupPicture.querySelector(".popup__photo-title").textContent = element.name;
  popupPicture.querySelector(".popup__img").alt = element.name;

  openPopup(popupPicture);
}


buttonOpenPopupEditElement.addEventListener("click", () => {
  inputNamePopupEditProfileElement.value = nameProfileElement.textContent;
  inputJobPopupEditProfileElement.value = jobElement.textContent;
  openPopup(popupProfileEdit);
});

buttonOpenPopupAddNewCard.addEventListener("click", () => {
  openPopup(popupAddNewCard);
  addCardFormValidator.disableButton();
});


popupProfileCloseButtonElement.addEventListener("click", () => closePopup(popupProfileEdit));
popupAddNewCardCloseButtonElement.addEventListener("click", () => closePopup(popupAddNewCard));
popupPictureCloseButtonElement.addEventListener("click", () => closePopup(popupPicture));
popupProfileEdit.addEventListener("mousedown", closePopupByClickOnOverlay);
popupAddNewCard.addEventListener("mousedown", closePopupByClickOnOverlay);
popupPicture.addEventListener("click", closePopupByClickOnOverlay);
formEditProfile.addEventListener("submit", handleFormSubmitPopupEditProfile);
formAddNewCard.addEventListener("submit", handleFormAddCard);


const addCardFormValidator = new FormValidator(settings, formAddNewCard);
const editProfileFormValidator = new FormValidator(settings, formEditProfile);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();


function renderCard(item, container) {
  const card = new Card(item, elementTemplate, openPicture);
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
  closePopup(popupAddNewCard);
  formAddNewCard.reset();
}

