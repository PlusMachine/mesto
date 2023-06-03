import {
  settings,
  popupProfileEdit,
  popupPicture,
  popupAddNewCard,
  popupConfirm,
  popupEditAvatar,
  formAddNewCard,
  formEditProfile,
  formEditAvatar,
  nameElement,
  aboutElement,
  avatarElement,
  elementTemplate,
  buttonOpenPopupAddNewCard,
  buttonOpenPopupEditElement,
  buttonOpenPopupEditAvatar,
  inputNameElement,
  inputAboutElement,
  inputAvatarElement,
} from '../utils/constants.js';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '2a145710-3bc0-4bda-81bf-8857fba682fa',
    'Content-Type': 'application/json'
  }
});


const userInfo = new UserInfo({ nameSelector: nameElement, aboutSelector: aboutElement, avatarSelector: avatarElement });

api.getUser().then((res) => {
  userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar, userId: res._id })
}).catch((error) => console.error(`Ошибка при загрузке данных ${error}`));


const cardList = new Section({ renderer: renderCard }, ".elements__list");


const picturePopup = new PopupWithImage(popupPicture);
picturePopup.setEventListeners();

const addCardFormValidator = new FormValidator(settings, formAddNewCard);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(settings, formEditProfile);
editProfileFormValidator.enableValidation();

const editAvatarFormValidator = new FormValidator(settings, formEditAvatar);
editAvatarFormValidator.enableValidation();

api.getInitialCards().
  then((initialCards) => {
    const userId = userInfo.getUserInfo().userId;
    const items = initialCards.reverse();
    cardList.renderItems(items, userId)
  }).catch((error => console.error(`Ошибка при получении массива карточек или информации о пользователе ${error}`)))
  ;

const popupAdd = new PopupWithForm(popupAddNewCard, handleFormAddCard, settings);
popupAdd.setEventListeners();

const popupEdit = new PopupWithForm(popupProfileEdit, handleSubmitSetInfo, settings);
popupEdit.setEventListeners();

const popupUpdateAvatar = new PopupWithForm(popupEditAvatar, handleEditAvatar, settings);
popupUpdateAvatar.setEventListeners();

const confirmPopup = new PopupWithConfirmation(
  popupConfirm,
  ({ card, cardId }) => {
    api.deleteCard(cardId).then(() => {
      card.removeCardElement();
      confirmPopup.close();
    })
      .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
      .finally(() => confirmPopup.setDefaultButtonText());
  }
);
confirmPopup.setEventListeners();


buttonOpenPopupEditElement.addEventListener("click", () => {
  const ownerInfo = userInfo.getUserInfo();

  inputNameElement.value = ownerInfo.name;
  inputAboutElement.value = ownerInfo.about;

  editProfileFormValidator.resetValidation();
  popupEdit.open();
});

buttonOpenPopupAddNewCard.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  popupAdd.open();
  addCardFormValidator.disableButton();
});

buttonOpenPopupEditAvatar.addEventListener("click", () => {
  inputAvatarElement.value = userInfo.getUserInfo().avatar;

  editAvatarFormValidator.resetValidation();
  popupUpdateAvatar.open();
})


function createCard(item, user) {
  const card = new Card(
    item,
    elementTemplate,
    () => { picturePopup.open(item) },
    confirmPopup.open,
    (cardId) => {
      let itLiked = card.isLiked();
      if (itLiked) {
        api.deleteLike(cardId).then((res) => card.toggleButtonLike(res.likes))
          .catch((error) => console.error(`Ошибка при снятии лайка ${error}`))
      } else {
        api.addLike(cardId).then((res) => card.toggleButtonLike(res.likes))
          .catch((error) => console.error(`Ошибка при попытке поставить лайк ${error}`));
      }
    },
    user
  );
  return card.getCard();
};


function renderCard(item, user) {
  const cardElement = createCard(item, user);
  cardList.addItem(cardElement);
}

function handleFormAddCard(inputValues) {
  api.addCard(inputValues.title, inputValues.link)
    .then((newCard) => {
      renderCard({
        name: newCard.name, _id: newCard._id, link: newCard.link, likes: newCard.likes, owner: { _id: newCard.owner._id }
      }, newCard.owner._id);
      popupAdd.close();
    })
    .catch((error => console.error(`Ошибка при попытке создать новую карточку ${error}`)))
    .finally(() => popupAdd.setDefaultButtonText());
}

function handleSubmitSetInfo(inputValues) {
  api.updateProfileInfo(inputValues.name, inputValues.about)
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar });
      popupEdit.close();
    })
    .catch((error => console.error(`Ошибка при попытке редактировать профиль ${error}`)))
    .finally(() => popupEdit.setDefaultButtonText());

};

function handleEditAvatar(inputValues) {
  api.updateAvatar(inputValues.avatar)
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar });
      popupUpdateAvatar.close();
    })
    .catch((error => console.error(`Ошибка при попытке сменить аватар ${error}`)))
    .finally(() => popupUpdateAvatar.setDefaultButtonText());
}


