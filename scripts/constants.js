export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const popupProfileEdit = document.querySelector(".popup-edit");
export const popupAddNewCard = document.querySelector(".popup-add");
export const popupPicture = document.querySelector(".popup-picture");
export const buttonOpenPopupEditElement = document.querySelector(".profile__edit-button");
export const buttonOpenPopupAddNewCard = document.querySelector(".profile__add-button");
export const formEditProfile = popupProfileEdit.querySelector(".popup__form-edit");
export const formAddNewCard = popupAddNewCard.querySelector(".popup__form-add");
export const inputNamePopupEditProfileElement = formEditProfile.querySelector(".popup__form-field_input_name");
export const inputJobPopupEditProfileElement = formEditProfile.querySelector(".popup__form-field_input_job");
export const inputTitlePopupAddNewCardElement = formAddNewCard.querySelector(".popup__form-field_input_title");
export const inputLinkPopupAddNewCardElement = formAddNewCard.querySelector(".popup__form-field_input_link");
export const nameProfileElement = document.querySelector(".profile__name");
export const jobElement = document.querySelector(".profile__profession");
export const elementTemplate = document.querySelector(".template-element").content;
export const listElement = document.querySelector(".elements__list");
