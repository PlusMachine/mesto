import Card from './Card.js';
import FormValidator from './FormValidator.js';


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

const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];


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


export function openPicture(element) {
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

  const formButton = popupAddNewCard.querySelector(settings.submitButtonSelector);
  AddCardFormValidator.disableButton(formButton);
});


popupProfileCloseButtonElement.addEventListener("click", () => closePopup(popupProfileEdit));
popupAddNewCardCloseButtonElement.addEventListener("click", () => closePopup(popupAddNewCard));
popupPictureCloseButtonElement.addEventListener("click", () => closePopup(popupPicture));
popupProfileEdit.addEventListener("click", closePopupByClickOnOverlay);
popupAddNewCard.addEventListener("click", closePopupByClickOnOverlay);
popupPicture.addEventListener("click", closePopupByClickOnOverlay);
formEditProfile.addEventListener("submit", handleFormSubmitPopupEditProfile);
formAddNewCard.addEventListener("submit", handleFormAddCard);


const AddCardFormValidator = new FormValidator(settings, formAddNewCard);
const EditProfileFormValidator = new FormValidator(settings, formEditProfile);
AddCardFormValidator.enableValidation();
EditProfileFormValidator.enableValidation();


function renderCard(item, container) {
  const card = new Card(item, elementTemplate);
  const cardElement = card.getCard();
  container.prepend(cardElement);
}

function renderArrayCards(array, container) {
  array.forEach((item) => renderCard(item, container));
};

renderArrayCards(initialCards, listElement);

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

