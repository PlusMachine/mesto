const popupProfileEdit = document.querySelector(".popup-edit");
const popupAddNewCard = document.querySelector(".popup-add");
const popupPicture = document.querySelector(".popup-picture");
const popupProfileCloseButtonElement = popupProfileEdit.querySelector(".popup__close-button");
const popupAddNewCardCloseButtonElement = popupAddNewCard.querySelector(".popup__close-button");
const popupPictureCloseButtonElement = popupPicture.querySelector(".popup__close-button");
const buttonOpenPopupEditElement = document.querySelector(".profile__edit-button");
const buttonOpenPopupAddNewCard = document.querySelector(".profile__add-button");
const buttonSaveProfileElement = popupProfileEdit.querySelector(".popup__form-edit");
const formAddNewCard = popupAddNewCard.querySelector(".popup__form-add");
const inputNamePopupEditProfileElement = buttonSaveProfileElement.querySelector(".popup__form-field_input_name");
const inputJobPopupEditProfileElement = buttonSaveProfileElement.querySelector(".popup__form-field_input_job");
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
  const currentPopup = document.querySelector(".popup_is-opened");
  if (event.key === 'Escape') {
    closePopup(currentPopup);
  }
};

function handleFormSubmitPopupEditProfile(evt) {
  evt.preventDefault();
  nameProfileElement.textContent = inputNamePopupEditProfileElement.value;
  jobElement.textContent = inputJobPopupEditProfileElement.value;
  closePopup(popupProfileEdit);
};


function createCard(element) {
  const htmlElement = elementTemplate.querySelector(".elements__element").cloneNode(true);
  const likeELement = htmlElement.querySelector(".elements__like");
  const basketElement = htmlElement.querySelector(".elements__basket");
  const imageElement = htmlElement.querySelector(".elements__image");

  htmlElement.querySelector(".elements__title").textContent = element.name;
  htmlElement.querySelector(".elements__image").src = element.link;

  likeELement.addEventListener('click', (evt) => {
    evt.target.classList.toggle("elements__like_active");
  });

  basketElement.addEventListener('click', (evt) => {
    evt.target.closest(".elements__element").remove();
  });

  imageElement.addEventListener('click', () => openPicture(element))

  return htmlElement
}

function renderCard(item, container) {
  const card = createCard(item);
  container.prepend(card);
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

function openPicture(element) {
  popupPicture.querySelector(".popup__img").src = element.link;
  popupPicture.querySelector(".popup__photo-title").textContent = element.name;

  openPopup(popupPicture);
}

inputNamePopupEditProfileElement.value = nameProfileElement.textContent;
inputJobPopupEditProfileElement.value = jobElement.textContent;

buttonOpenPopupEditElement.addEventListener("click", () => {
  openPopup(popupProfileEdit);
});
buttonOpenPopupAddNewCard.addEventListener("click", () => openPopup(popupAddNewCard));
popupProfileCloseButtonElement.addEventListener("click", () => closePopup(popupProfileEdit));
popupAddNewCardCloseButtonElement.addEventListener("click", () => closePopup(popupAddNewCard));
popupPictureCloseButtonElement.addEventListener("click", () => closePopup(popupPicture));
popupProfileEdit.addEventListener("click", closePopupByClickOnOverlay);
popupAddNewCard.addEventListener("click", closePopupByClickOnOverlay);
popupPicture.addEventListener("click", closePopupByClickOnOverlay);
buttonSaveProfileElement.addEventListener("submit", handleFormSubmitPopupEditProfile);
formAddNewCard.addEventListener("submit", handleFormAddCard);
