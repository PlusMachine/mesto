const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const popupEditButtonElement = document.querySelector(".profile__edit-button");
const formElement = popupElement.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__form-field_input_name");
const jobInput = formElement.querySelector(".popup__form-field_input_job");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__profession");

const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
};

const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
};

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
  closePopup();
};

popupEditButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
/*popupElement.addEventListener("click", closePopupByClickOnOverlay);*/
formElement.addEventListener("submit", handleFormSubmit);


