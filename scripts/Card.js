class Card {
  constructor(data, template, openPicture) {
    this._data = data;
    this._template = template;
    this._openPicture = openPicture;
    this._element = this._template.querySelector(".elements__element").cloneNode(true);
  }

  getCard() {
    this._setCardContent(this._element);
    this._setEventListeners(this._element);

    return this._element
  }

  _setEventListeners() {
    const likeElement = this._element.querySelector(".elements__like");
    const basketElement = this._element.querySelector(".elements__basket");
    const imageElement = this._element.querySelector(".elements__image");

    likeElement.addEventListener('click', () => this._handleLikeButtonClick(likeElement));
    basketElement.addEventListener('click', () => this._handleRemoveButtonClick());
    imageElement.addEventListener('click', () => this._handleImageClick());
  }

  _handleLikeButtonClick(likeElement) {
    likeElement.classList.toggle('elements__like_active');
  }

  _handleRemoveButtonClick() {
    this._element.remove()
    this._element = null;
  }

  _handleImageClick() {
    this._openPicture(this._data);
  }

  _setCardContent() {
    this._element.querySelector(".elements__title").textContent = this._data.name;
    this._element.querySelector(".elements__image").src = this._data.link;
    this._element.querySelector(".elements__image").alt = this._data.name;
  }
}

export default Card;