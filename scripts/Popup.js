class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  };


  setEventListeners() {
    const closeButtonElement = this._popup.querySelector(".popup__close-button");
    closeButtonElement.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', (evt) => {
      if (evt.target !== this._popup) {
        return;
      }
      this.close();
    })
  }
}


export default Popup;
