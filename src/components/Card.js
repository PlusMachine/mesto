class Card {
  constructor(data, template, handleCardClick) {
    this._data = data;
    this._template = template;
    this._element = this._template.querySelector(".elements__element").cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._likeButton = this._element.querySelector(".elements__like-icon");
    this._basketButton = this._element.querySelector(".elements__basket");
    this._cardImage = this._element.querySelector(".elements__image");
    this._cardTitle = this._element.querySelector(".elements__title")
  }

  getCard() {
    this._setCardContent();
    this._setEventListeners();

    return this._element
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeButtonClick());
    this._basketButton.addEventListener('click', () => this._handleRemoveButtonClick());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  _handleLikeButtonClick() {
    this._likeButton.classList.toggle('elements__like-icon_active');
  }

  _handleRemoveButtonClick() {
    this._element.remove();
    this._element = null;
  }

  _setCardContent() {
    this._cardTitle.textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
  }
}

export default Card;
