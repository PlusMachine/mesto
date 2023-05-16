import {
  settings,
  popupProfileEdit,
  popupPicture,
  popupAddNewCard,
  formAddNewCard,
  formEditProfile,
  nameElement,
  jobElement,
  elementTemplate,
  buttonOpenPopupAddNewCard,
  buttonOpenPopupEditElement,
  inputNameElement,
  inputJobElement,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import initialCards from '../components/initialCards.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

const picturePopup = new PopupWithImage(popupPicture);
picturePopup.setEventListeners();

const addCardFormValidator = new FormValidator(settings, formAddNewCard);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(settings, formEditProfile);
editProfileFormValidator.enableValidation();

const cardList = new Section({ items: initialCards, renderer: renderCard }, ".elements__list");
cardList.renderItems();

const popupAdd = new PopupWithForm(popupAddNewCard, handleFormAddCard, settings);
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm(popupProfileEdit, handleSubmitSetInfo, settings);
popupEdit.setEventListeners();

const userInfo = new UserInfo({ nameSelector: nameElement, jobSelector: jobElement });

buttonOpenPopupEditElement.addEventListener("click", () => {
  inputNameElement.value = userInfo.getUserInfo().name;
  inputJobElement.value = userInfo.getUserInfo().job;

  editProfileFormValidator.resetValidation();
  popupEdit.open();
});

buttonOpenPopupAddNewCard.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  popupAdd.open();
  addCardFormValidator.disableButton();
});

function createCard(item) {
  const card = new Card(item, elementTemplate, (name, link) => {
    picturePopup.open(item)
  });
  return card.getCard();
}

function renderCard(item) {
  const cardElement = createCard(item);
  cardList.addItem(cardElement);
}

function handleFormAddCard(inputValues) {
  renderCard({
    name: inputValues.title,
    link: inputValues.link
  });
  popupAdd.close();
}

function handleSubmitSetInfo(inputValues) {
  userInfo.setUserInfo({ name: inputValues.name, job: inputValues.job });

  popupEdit.close();
};

