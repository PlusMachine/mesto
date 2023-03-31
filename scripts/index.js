const popupProfileEdit = document.querySelector(".popup-edit");
const popupAdd = document.querySelector(".popup-add");
const popupPicture = document.querySelector(".popup-picture");
const popupProfileCloseButtonElement = popupProfileEdit.querySelector(".popup__close-button");
const popupAddCloseButtonElement = popupAdd.querySelector(".popup__close-button");
const popupPictureCloseButtonElement = popupPicture.querySelector(".popup__close-button");
const popupEditButtonElement = document.querySelector(".profile__edit-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");
const formSaveButtonElement = popupProfileEdit.querySelector(".popup__form-edit");
const formAddButtonElement = popupAdd.querySelector(".popup__form-add");
const nameInput = formSaveButtonElement.querySelector(".popup__form-field_input_name");
const jobInput = formSaveButtonElement.querySelector(".popup__form-field_input_job");
const titleInput = formAddButtonElement.querySelector(".popup__form-field_input_title");
const linkInput = formAddButtonElement.querySelector(".popup__form-field_input_link");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__profession");
const elementTemplate = document.querySelector(".template-element").content;
const listElement = document.querySelector(".elements__list");

const initialCards = [
  {
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
};


const closePopup = function (popup) {
  popup.classList.remove("popup_is-opened");
}

/*const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};*/


function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup(popupProfileEdit);
};


function renderElement(element) {
  const htmlElement = elementTemplate.cloneNode(true);
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

  listElement.prepend(htmlElement);
}

initialCards.forEach(renderElement);

function handleFormAddCard(evt) {
  evt.preventDefault();
  let newCard = { name: titleInput.value, link: linkInput.value };
  renderElement(newCard);
  closePopup(popupAdd);
  titleInput.value = "";
  linkInput.value = "";
}

function openPicture(element) {
  popupPicture.querySelector(".popup__img").src = element.link;
  popupPicture.querySelector(".popup__photo-title").textContent = element.name;

  popupPicture.classList.add("popup_is-opened");
}

popupEditButtonElement.addEventListener("click", () => {
  openPopup(popupProfileEdit);
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
});
popupAddButtonElement.addEventListener("click", () => openPopup(popupAdd));
popupProfileCloseButtonElement.addEventListener("click", () => closePopup(popupProfileEdit));
popupAddCloseButtonElement.addEventListener("click", () => closePopup(popupAdd));
popupPictureCloseButtonElement.addEventListener("click", () => closePopup(popupPicture));
/*popupElement.addEventListener("click", closePopupByClickOnOverlay);*/
formSaveButtonElement.addEventListener("submit", handleFormSubmit);
formAddButtonElement.addEventListener("submit", handleFormAddCard);



