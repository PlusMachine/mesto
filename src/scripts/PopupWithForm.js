import Popup from "./Popup.js";
import {
  settings,
} from './constants.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(settings.formSelector);
  }
  _getInputValues() {
    const inputList = this._popup.querySelectorAll(settings.inputSelector)
    const inputValues = {};

    inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners;
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
