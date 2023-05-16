import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit, settings) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._settings = settings;
    this._form = this._popup.querySelector(this._settings.formSelector);
    this._inputList = this._popup.querySelectorAll(this._settings.inputSelector);
  }
  _getInputValues() {
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
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
