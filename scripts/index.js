import {
  settings,
  popupProfileEdit,
  popupPicture,
  popupAddNewCard,
  formAddNewCard,
  formEditProfile,
  nameProfileElement,
  jobElement,
  elementTemplate,
  buttonOpenPopupAddNewCard,
  buttonOpenPopupEditElement,
  inputNamePopupEditProfileElement,
  inputJobPopupEditProfileElement,
} from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './initialCards.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

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

const cardList = new Section({ items: initialCards, renderer: renderCard }, ".elements__list");
cardList.renderItems();

const popupAdd = new PopupWithForm(popupAddNewCard, handleFormAddCard);
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm(popupProfileEdit, handleFormSubmitPopupEditProfile);
popupEdit.setEventListeners();

buttonOpenPopupEditElement.addEventListener("click", () => {
  inputNamePopupEditProfileElement.value = nameProfileElement.textContent;
  inputJobPopupEditProfileElement.value = jobElement.textContent;

  profilePopup.open();
});

buttonOpenPopupAddNewCard.addEventListener("click", () => {
  addNewCardPopup.open();
  addCardFormValidator.disableButton();
});

function renderCard(item) {
  const card = new Card(item, elementTemplate, (name, link) => {
    picturePopup.open(item)
  });
  const cardElement = card.getCard();
  cardList.addItem(cardElement);
}

function handleFormAddCard(inputValues) {
  const newCard = {
    name: inputValues.title,
    link: inputValues.link
  };

  renderCard(newCard);
  popupAdd.close();
}

function handleFormSubmitPopupEditProfile(inputValues) {
  nameProfileElement.textContent = inputValues.name;
  jobElement.textContent = inputValues.job;

  popupEdit.close();
};

