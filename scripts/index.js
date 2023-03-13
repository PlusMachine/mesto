const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const popupEditButtonElement = document.querySelector(".profile__edit-button");
const formElement = popupElement.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__profession");
const saveButtonElement = formElement.querySelector(".popup__save-button");

const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
};

const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
};

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

nameInput.value = nameElement.textContent;
jobInput.value = jobElement.textContent;


function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup();
};


popupEditButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);
saveButtonElement.addEventListener("click", handleFormSubmit);


