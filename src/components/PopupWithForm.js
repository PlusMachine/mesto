import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit, settings) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._settings = settings;
    this._form = this._popup.querySelector(this._settings.formSelector);
    this._inputList = this._popup.querySelectorAll(this._settings.inputSelector);
    this._submitButton = this._form.querySelector(".popup__button");
    this._buttonDefaultText = this._submitButton.textContent;
  }
  getInputValues() {
    const inputValues = {};

    this._inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", evt => {
      evt.preventDefault();
      this._submitButton.textContent = "Сохранение..."
      this._handleSubmit(this.getInputValues());
    });
  }

  setDefaultButtonText() {
    this._submitButton.textContent = this._buttonDefaultText;
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
