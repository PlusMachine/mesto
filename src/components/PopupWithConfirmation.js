import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleButtonConfirm) {
    super(popupSelector);
    this._button = document.querySelector('.popup-confirm__button');
    this._handleButtonConfirm = handleButtonConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {
      console.log(this._card, this._cardId);
      this._handleButtonConfirm({ card: this._card, cardId: this._cardId });
      this.close();
    })
  };

  open = ({ card, cardId }) => {
    super.open();
    this._card = card;
    this._cardId = cardId
  }
}

export default PopupWithConfirmation;
