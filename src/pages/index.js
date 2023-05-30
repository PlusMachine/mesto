import {
  settings,
  popupProfileEdit,
  popupPicture,
  popupAddNewCard,
  formAddNewCard,
  formEditProfile,
  nameElement,
  aboutElement,
  avatarElement,
  elementTemplate,
  buttonOpenPopupAddNewCard,
  buttonOpenPopupEditElement,
  inputNameElement,
  inputAboutElement,
} from '../utils/constants.js';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '2a145710-3bc0-4bda-81bf-8857fba682fa',
    'Content-Type': 'application/json'
  }
});

let cardList;

const picturePopup = new PopupWithImage(popupPicture);
picturePopup.setEventListeners();

const addCardFormValidator = new FormValidator(settings, formAddNewCard);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(settings, formEditProfile);
editProfileFormValidator.enableValidation();

api.getInitialCards().then((res) => {
  const items = res.reverse();

  cardList = new Section({ items, renderer: renderCard }, ".elements__list");
  cardList.renderItems(cardList);
});

const popupAdd = new PopupWithForm(popupAddNewCard, handleFormAddCard, settings);
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm(popupProfileEdit, handleSubmitSetInfo, settings);
popupEdit.setEventListeners();

const userInfo = new UserInfo({ nameSelector: nameElement, aboutSelector: aboutElement, avatarSelector: avatarElement });

buttonOpenPopupEditElement.addEventListener("click", () => {
  inputNameElement.value = userInfo.getUserInfo().name;
  inputAboutElement.value = userInfo.getUserInfo().about;

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

function renderCard(item, cardList) {
  const cardElement = createCard(item);
  cardList.addItem(cardElement);
}

function handleFormAddCard(inputValues) {
  api.addCard(inputValues.title, inputValues.link)
    .then((res) => {
      renderCard({ name: res.name, link: res.link }, cardList)
    });
  popupAdd.close();
}

function handleSubmitSetInfo(inputValues) {
  api.updateProfileInfo(inputValues.name, inputValues.about)
    .then(res => res.json())
    .then((res) => userInfo.setUserInfo({ name: res.name, about: res.about }))

  popupEdit.close();
};

api.getUser().then((res) => {
  const name = res.name;
  const about = res.about;
  const avatar = res.avatar;
  userInfo.setUserInfo({ name, about, avatar })
}
);

