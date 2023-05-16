class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      })
    })
  };

  enableButton() {
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  };

  disableButton() {
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  };

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      const currentInputErrorContainer = document.querySelector(`.${inputElement.id}-error`).textContent = "";
    });
  }

  _checkInputValidity(input) {
    const currentInputErrorContainer = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
      currentInputErrorContainer.textContent = ''
    } else {
      currentInputErrorContainer.textContent = input.validationMessage;
    }
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this.enableButton();
    };
  };

  _hasInvalidInput() {
    return this._inputList.some(input => !input.validity.valid);
  };

}

export default FormValidator;
