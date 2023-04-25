import { openPicture } from "./index.js";

class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
  }

  getCard() {
    const htmlElement = this._templateSelector.querySelector(".elements__element").cloneNode(true);

    this._setCardContent(htmlElement);
    this._setEventListeners(htmlElement);

    return htmlElement
  }

  _setEventListeners(htmlElement) {
    const likeElement = htmlElement.querySelector(".elements__like");
    const basketElement = htmlElement.querySelector(".elements__basket");
    const imageElement = htmlElement.querySelector(".elements__image");

    likeElement.addEventListener('click', () => this._handleLikeButtonClick(likeElement));
    basketElement.addEventListener('click', () => this._handleRemoveButtonClick(basketElement));
    imageElement.addEventListener('click', () => this._handleImageClick());
  }

  _handleLikeButtonClick(likeElement) {
    likeElement.classList.toggle('elements__like_active');
  }

  _handleRemoveButtonClick(basketElement) {
    basketElement.closest('.elements__element').remove();
  }

  _handleImageClick() {
    openPicture(this._data);
  }

  _setCardContent(htmlElement) {
    htmlElement.querySelector(".elements__title").textContent = this._data.name;
    htmlElement.querySelector(".elements__image").src = this._data.link;
    htmlElement.querySelector(".elements__image").alt = this._data.name;
  }
}

export default Card;
