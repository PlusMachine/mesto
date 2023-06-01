class Card {
  constructor(data, template, handleCardClick, handleConfirmPopupOpen, user) {
    this._data = data;
    this._user = user;
    this._template = template;
    this._element = this._template.querySelector(".elements__element").cloneNode(true);
    this._handleCardClick = handleCardClick;
    this._handleConfirmPopupOpen = handleConfirmPopupOpen;
    this._likeButton = this._element.querySelector(".elements__like-icon");
    this._likeCounter = this._element.querySelector(".elements__like-counter");
    this._basketButton = this._element.querySelector(".elements__basket");
    this._cardImage = this._element.querySelector(".elements__image");
    this._cardTitle = this._element.querySelector(".elements__title")
  }


  getCard() {
    this._setCardContent();
    this._setEventListeners();
    this._showBasketButton();
    return this._element
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeButtonClick());
    this._basketButton.addEventListener('click', () => this._handleRemoveButtonClick(this._element, this._data._id));
    this._cardImage.addEventListener('click', () => this._handleCardClick());
  }

  _handleRemoveButtonClick = () => {
    this._handleConfirmPopupOpen({ card: this, cardId: this._data._id })
  }

  _handleLikeButtonClick() {
    this._likeButton.classList.toggle('elements__like-icon_active');
  }

  _setCardContent() {
    this._cardTitle.textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._likeCounter.textContent = this._data.likes.length;
  }

  _showBasketButton() {
    if (this._user === this._data.owner._id) {
      this._basketButton.classList.add('elements__basket-button_is-visible');
    }
  }

  removeCardElement() {
    this._element.remove();
    this._element = null;
  }
};

export default Card;
