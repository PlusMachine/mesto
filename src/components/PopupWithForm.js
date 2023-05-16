import Popup from "./Popup.js";
import {
  settings,
} from '../utils/constants.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(settings.formSelector);
    this._inputList = this._popup.querySelectorAll(settings.inputSelector);
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

  // resetValidation() {
  //   this._toggleButtonState(); <== управляем кнопкой ==

  //     this._inputList.forEach((inputElement) => {
  //       this._hideError(inputElement) <==очищаем ошибки ==
  //   });

  // }
}

export default PopupWithForm;
